import { DictionaryType } from "@/lib/dictionary";
import Image from "next/image";
import React from "react";

type Props = {
  dictionary: DictionaryType;
};

const WhoWeAre = ({ dictionary }: Props) => {
  const { whowearelist, whoweare } = dictionary;
  return (
    <section className="bg-bg2 relative py-20">
      <div className="max-w-custom-max mx-auto max-xl:px-2">
        <div className="flex pb-24">
          <div className="w-3/4">
            <h1 className="  pb-12 text-4xl font-semibold lg:text-6xl">
              {whoweare.title}
            </h1>
            <p className="max-w-[700px]  text-2xl text-orange">
              {whoweare.subtitle}
            </p>
          </div>
          {/* image */}
          <div className="flex flex-1 justify-end ">
            <Image
              src="/img/questionmark.svg"
              alt="questionmark"
              width={77}
              height={88}
              className="  object-contain"
            />
          </div>
          <div></div>
        </div>
        <div className="grid gap-16 py-14 sm:grid-cols-3">
          {whowearelist.map((item, index) => (
            <div key={item} className="flex flex-col ">
              <span className="text-orange">{index + 1}</span>
              <hr className="my-3 block h-1 w-12 bg-fg" />
              <h2 className="font-base pt-8">{item}</h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
