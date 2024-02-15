import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import React from "react";

type Props = {
  params: {
    lang: Locale;
  };
};
export const generateStaticParams = async () => {
  const slugs = ["en", "es", "da", "pl"];
  return slugs.map((slug) => ({
    lang: slug,
  }));
};
export default async function Page({ params }: Props) {
  const dictionary = await getDictionary(params.lang);
  return (
    <div className=" mt-header h-[50vh]">
      <h1 className="py-24 text-center text-4xl">
        Place for <span className="font-semibold text-cyan">Tolq</span> subpage{" "}
      </h1>
    </div>
  );
}
