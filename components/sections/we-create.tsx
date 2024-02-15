import { Locale } from "@/i18n.config";
import { DictionaryType } from "@/lib/dictionary";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  lang: Locale;
  dictionary: DictionaryType;
};

const WeCreate = ({ lang, dictionary }: Props) => {
  const { wecreate } = dictionary;
  return (
    <div className="min-h-customfull-height md:h-customfull-height relative  max-lg:text-center">
      <section className="max-w-custom-max mx-auto grid  min-h-full max-lg:px-2   max-md:justify-center md:grid-cols-2">
        <div className="self-top mt-[10vh] sm:mt-[20vh]">
          <h1 className="  pb-8 text-5xl font-semibold lg:text-7xl">
            {wecreate.title1} <br />
            {wecreate.title2}
          </h1>
          <p className="  pb-8 text-2xl text-orange">{wecreate.subtitle}</p>
          <Link
            href={`${lang}/#startups`}
            className=" block w-fit rounded-full border-2 border-cyan bg-cyan px-8 py-4 text-base text-white hover:opacity-80 max-lg:mx-auto "
          >
            {wecreate.button}
          </Link>
        </div>
        <div className=" relative self-end dark:self-center">
          <Image
            src="/img/hero.svg"
            alt="we create"
            priority
            width={705}
            height={507}
            className="mx-auto  mt-12 bg-white  dark:aspect-square dark:rounded-full  
            max-lg:max-w-[300px] max-sm:mb-4
            dark:lg:max-w-[70%]  "
          />
        </div>
      </section>
    </div>
  );
};

export default WeCreate;
