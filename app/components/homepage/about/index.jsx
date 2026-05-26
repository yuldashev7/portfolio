// @flow strict
'use client';

import { personalData } from '@/utils/data/personal-data';
import { useI18n } from '@/providers/language-provider';
import Image from 'next/image';

function AboutSection() {
  const { t } = useI18n();

  return (
    <div id="about" className="my-12 lg:my-16 relative">
      <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          {t('about.sideTitle')}
        </span>
        <span className="h-36 w-0.5 bg-[#1a1443]"></span>
      </div>
      <div className="">
        <div className="order-2 lg:order-1">
          <p className="font-medium mb-5 text-center md:mb-8 text-[#16f2b3] text-xl uppercase">
            {t('about.title')}
          </p>
          <div className="max-w-[77%] mx-auto text-center">
            <p className="text-gray-200 text-sm lg:text-lg">
              {t('about.description')}
            </p>
          </div>
        </div>
        {/* <div className="flex justify-center order-1 lg:order-2">
          <Image
            src={personalData.profile}
            width={280}
            height={280}
            alt="Profile"
            className="rounded-lg transition-all duration-1000 grayscale hover:grayscale-0 hover:scale-110 cursor-pointer"
          />
        </div> */}
      </div>
    </div>
  );
}

export default AboutSection;
