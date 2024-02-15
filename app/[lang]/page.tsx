import InViewComp from "@/components/in-view";
import AreCore from "@/components/sections/are-core";
import Contact from "@/components/sections/contact";
import Info from "@/components/sections/info";
import OurWork from "@/components/sections/our-work";
import WeAreHiring from "@/components/sections/we-are-hiring";
import WeCreate from "@/components/sections/we-create";
import WeLove from "@/components/sections/we-love";
import WhoWeAre from "@/components/sections/who-we-are";

import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";

type Props = {
  params: { lang: Locale };
};

export const generateStaticParams = async () => {
  const slugs = ["en", "es", "da", "pl"];
  return slugs.map((slug) => ({
    lang: slug,
  }));
};

export default async function Home({ params }: Props) {
  const dictionary = await getDictionary(params.lang);
  return (
    <main className="mt-header overflow-hidden text-4xl">
      <InViewComp activeLink="">
        <WeCreate dictionary={dictionary} lang={params.lang} />
      </InViewComp>

      <WhoWeAre dictionary={dictionary} />
      <WeLove dictionary={dictionary} />
      <AreCore dictionary={dictionary} />
      <InViewComp activeLink="startups">
        <OurWork dictionary={dictionary} lang={params.lang} />
      </InViewComp>
      <Info dictionary={dictionary} />
      <WeAreHiring dictionary={dictionary} lang={params.lang} />

      <InViewComp activeLink="contact">
        <Contact dictionary={dictionary} lang={params.lang} />
      </InViewComp>
    </main>
  );
}
