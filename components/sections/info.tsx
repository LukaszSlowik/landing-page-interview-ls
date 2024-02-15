import { DictionaryType } from "@/lib/dictionary";
import Image from "next/image";
import React from "react";

type Props = {
  dictionary: DictionaryType;
};

const Info = ({ dictionary }: Props) => {
  const info = dictionary.info;
  return (
    <section className="relative bg-bg py-32">
      <div className="max-w-custom-max mx-auto max-xl:px-2">
        <div className=" flex items-center justify-center gap-8 ">
          <Image
            src="/img/thumb-left.svg"
            alt="thumb-left"
            width={77}
            height={88}
            className=" max-xs:hidden rounded-full object-contain dark:aspect-square dark:bg-white dark:p-2"
          />
          <h2 className="text-center font-semibold text-orange max-sm:text-2xl">
            {info}
          </h2>
          <Image
            src="/img/thumb-right.svg"
            alt="thumb-right"
            width={77}
            height={88}
            className="max-xs:hidden  rounded-full object-contain dark:aspect-square dark:bg-white dark:p-2"
          />
        </div>
      </div>
    </section>
  );
};

export default Info;
