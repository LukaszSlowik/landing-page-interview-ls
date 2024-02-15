import { Locale } from "@/i18n.config";
import { DictionaryType } from "@/lib/dictionary";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  dictionary: DictionaryType;
  lang: Locale;
};

const WeAreHiring = ({ dictionary, lang }: Props) => {
  const { wearehiring } = dictionary;
  return (
    <section id="workwithus" className="bg-bg2 relative scroll-mt-20 py-32">
      <div className="max-w-custom-max mx-auto max-xl:px-2">
        <div className=" flex items-center justify-center gap-8 ">
          <Image
            src="/img/employee.svg"
            alt="employee"
            width={291}
            height={318}
            className="  object-contain dark:aspect-square dark:rounded-full dark:bg-white dark:p-2 max-sm:hidden"
          />
          <div className="flex-1 space-y-8 text-center">
            <h1 className="   text-4xl font-semibold lg:text-6xl">
              {wearehiring.title}
            </h1>
            <p className="  text-2xl text-orange">{wearehiring.subtitle}</p>
            <Link
              href={`${lang}/careers`}
              className="mx-auto block w-fit rounded-full border-2 border-cyan bg-cyan px-8 py-4 text-base text-white hover:opacity-80 "
            >
              {wearehiring.seeopenings}
            </Link>
          </div>
          <Image
            src="/img/employer.svg"
            alt="employer"
            width={291}
            height={318}
            className="   object-contain dark:aspect-square dark:rounded-full dark:bg-white dark:p-2 max-sm:hidden"
          />
        </div>
      </div>
    </section>
  );
};

export default WeAreHiring;
