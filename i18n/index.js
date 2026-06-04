import en from './locales/en.json';
import ru from './locales/ru.json';
import uz from './locales/uz.json';

export const DEFAULT_LANGUAGE = 'en';
export const LANGUAGE_STORAGE_KEY = 'site-language';
export const dictionaries = {
  en,
  uz,
  ru,
};

export const languages = Object.keys(dictionaries);

export function isValidLanguage(value) {
  return languages.includes(value);
}

export function getDictionary(language) {
  return dictionaries[language] ?? dictionaries[DEFAULT_LANGUAGE];
}

export function getNestedValue(object, path) {
  return path
    .split('.')
    .reduce((accumulator, key) => accumulator?.[key], object);
}
