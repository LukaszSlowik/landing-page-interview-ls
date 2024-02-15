import { DictionaryType } from "@/lib/dictionary";
import Image from "next/image";
import React from "react";

type Props = {
  dictionary: DictionaryType;
};

const AreCore = ({ dictionary }: Props) => {
  const { ourcorelist, ourcore } = dictionary;
  return (
    <section className="bg-bg2 relative py-20">
      <div className="max-w-custom-max mx-auto max-xl:px-2">
        <div className="flex items-center justify-between py-4 pb-24">
          <h1 className="  pb-12 text-4xl font-semibold lg:text-6xl">
            {ourcore}
          </h1>
          <Image
            src="/img/lightbulb.svg"
            alt="lightbulb"
            width={77}
            height={88}
            className=" rounded-full  object-contain dark:aspect-square dark:scale-125 dark:bg-white dark:p-2"
          />
        </div>
        <div className="grid gap-14 sm:grid-cols-2">
          {ourcorelist.map((item, index) => (
            <div key={index} className="flex flex-col ">
              <div>
                <span className="text-orange">
                  {index + 1}. {item.title}
                </span>
              </div>
              <hr className="my-3 block h-1 w-14 bg-fg" />
              <h2 className=" max-xs:text-base pt-8 text-2xl">{item.text}</h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AreCore;
