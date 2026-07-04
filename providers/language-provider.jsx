"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import {
  DEFAULT_LANGUAGE,
  getDictionary,
  getNestedValue,
  isValidLanguage,
  LANGUAGE_STORAGE_KEY,
} from "@/i18n";

const LanguageContext = createContext(null);

function interpolate(template, values) {
  if (typeof template !== "string" || !values) {
    return template;
  }

  return Object.entries(values).reduce(
    (result, [key, value]) => result.replaceAll(`{${key}}`, value),
    template,
  );
}

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(DEFAULT_LANGUAGE);

  useEffect(() => {
    const savedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);

    if (isValidLanguage(savedLanguage)) {
      setLanguageState(savedLanguage);
      return;
    }

    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, DEFAULT_LANGUAGE);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (value) => {
    if (!isValidLanguage(value)) {
      return;
    }

    setLanguageState(value);
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, value);
  };

  const dictionary = useMemo(() => getDictionary(language), [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      dictionary,
      t: (path, fallback = path, variables) => {
        const translatedValue = getNestedValue(dictionary, path);

        if (translatedValue === undefined) {
          return fallback;
        }

        return interpolate(translatedValue, variables);
      },
    }),
    [dictionary, language],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useI18n must be used within LanguageProvider");
  }

  return context;
}
