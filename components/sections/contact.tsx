import { DictionaryType } from "@/lib/dictionary";
import React from "react";
import ContactForm from "./contact-form";
import { Locale } from "@/i18n.config";
import Image from "next/image";

type Props = {
  dictionary: DictionaryType;
  lang: Locale;
};

const Contact = ({ dictionary, lang }: Props) => {
  const { formpage } = dictionary;
  return (
    <section
      id="contact"
      className="bg-bgOrange relative scroll-m-20 pb-16 pt-20  text-white max-lg:text-center"
    >
      <div className="max-w-custom-max mx-auto max-xl:px-2">
        <div className="space-y-8 lg:max-w-[600px] ">
          <h1 className="    text-4xl font-semibold lg:text-5xl">
            {formpage.title}
          </h1>
          <p className="  text-2xl ">{formpage.subtitle}</p>
          <ContactForm dictionary={dictionary} lang={lang} />
        </div>
        <Image
          src="/img/rocket.svg"
          alt="rocket"
          width={668}
          height={546}
          className="static bottom-0 left-[50%] right-0 max-w-[45vw] max-lg:mx-auto max-lg:pt-12 lg:absolute"
        />
        {/* </div> */}
      </div>
    </section>
  );
};

export default Contact;
