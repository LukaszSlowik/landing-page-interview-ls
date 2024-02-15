"use client";

import { DictionaryType } from "@/lib/dictionary";
import Image from "next/image";
import React from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
type Props = {
  dictionary: DictionaryType;
};

const Assistant = ({ dictionary }: Props) => {
  const { assistant } = dictionary;
  const { scrollY } = useScroll();
  const [scroll, setScroll] = React.useState(false);
  const [open, setOpen] = React.useState(true);
  useMotionValueEvent(scrollY, "change", (latest) => {
    console.log("Page scroll: ", latest);
    if (latest > 1100 && !scroll) {
      setScroll(true);
    }
    // if (latest < 200 && scroll) {
    //   setScroll(false);
    // }
  });
  if (!open || !scroll) return null;

  return (
    <div className="fixed bottom-0 right-0 ">
      <div className="relative p-4">
        <button
          onClick={() => setOpen(false)}
          className="absolute right-4 top-0 text-2xl hover:opacity-70"
        >
          X
        </button>
        <div>
          <p className="mr-10 rounded-l-full rounded-tr-full bg-cyan p-4 text-white">
            {assistant.firstline}
            <br /> {assistant.secondline}
          </p>
          <Image
            src="/img/assistant.svg"
            alt="assistant"
            width={70}
            height={70}
            className="ml-auto pt-4"
          />
        </div>
      </div>
    </div>
  );
};

export default Assistant;
