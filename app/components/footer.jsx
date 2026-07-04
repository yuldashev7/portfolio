"use client";

import Link from "next/link";
import { useI18n } from "@/providers/language-provider";

function Footer() {
  const { t } = useI18n();

  return (
    <div className="relative border-t bg-[#0d1224] border-[#353951] text-white">
      <div className="mx-auto px-6 sm:px-12 lg:max-w-280 xl:max-w-304 2xl:max-w-368 py-6 lg:py-10">
        <div className="flex justify-center -z-40">
          <div className="absolute top-0 h-px w-1/2 bg-linear-to-r from-transparent via-violet-500 to-transparent"></div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm">
            &copy; {t("footer.copyright")}{" "}
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/faxriddin-yuldashev-1a3050377/"
              className="text-[#16f2b3]"
            >
              Faxriddin Yuldashev
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
