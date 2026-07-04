"use client";
import { useI18n } from "@/providers/language-provider";
import Link from "next/link";

function page() {
  const { t } = useI18n();
  return (
    <div
      id="not_found_page"
      className="flex flex-col items-center justify-center h-screen text-center"
    >
      <h1 className="text-6xl font-bold text-gray-800 dark:text-gray-100">
        404
      </h1>
      <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
        {t("not_found_page.title")}
      </p>
      <p className="mt-2 text-gray-500 dark:text-gray-400">
        {t("not_found_page.text")}
      </p>
      <Link
        className="mt-5 flex items-center gap-1 hover:gap-3 rounded-full bg-linear-to-r from-pink-500 to-violet-600 px-3 md:px-8 py-3 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
        role="button"
        href="/"
      >
        {t("not_found_page.button")}
      </Link>
    </div>
  );
}

export default page;
