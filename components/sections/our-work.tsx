import { DictionaryType } from "@/lib/dictionary";
import React from "react";
import { ourWorks } from "@/data/our-work";
import Image from "next/image";
import Link from "next/link";
import { Locale } from "@/i18n.config";
type Props = {
  dictionary: DictionaryType;
  lang: Locale;
};

const OurWork = ({ dictionary, lang }: Props) => {
  const { ourworkslist, ourworks, more } = dictionary;
  return (
    <section id="startups" className="relative scroll-m-10 bg-bg py-32">
      <div className="max-w-custom-max mx-auto max-xl:px-2">
        <h1 className=" pb-12  text-center text-4xl font-semibold lg:text-6xl">
          {ourworks}
        </h1>

        <div className=" mx-auto grid gap-12 p-4  dark:bg-transparent sm:grid-cols-2">
          {ourWorks.map((item, index) => {
            const description =
              ourworkslist[item.name as keyof typeof ourworkslist];
            return (
              <div
                key={item.name}
                className="shadow-box flex flex-col items-center justify-end rounded-xl border p-8 text-center text-xl transition-all hover:scale-105  dark:shadow-none  "
              >
                <h1
                  className="py-4 text-4xl font-semibold"
                  style={{ color: item.color }}
                >
                  {item.title}
                </h1>
                <p>{description}</p>
                <Image
                  src={item.icon}
                  alt={item.name}
                  width={300}
                  height={300}
                  className="object-cover py-8"
                />
                <Link
                  href={`${lang}${item.href}`}
                  className="rounded-full border-2 border-cyan px-8 py-2 text-cyan hover:bg-cyan hover:text-white"
                >
                  {more}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurWork;
