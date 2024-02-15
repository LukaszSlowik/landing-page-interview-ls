"use client";

import React, { useEffect } from "react";
import { useTypingMotion } from "@/hooks/use-typing-motion";

type Props = {};

const phases = [
  "to write a code",
  "swimming",
  "to create webpages",
  "running",
  "climbing",
];
//let sleep = 100;

const TypingMotion = (props: Props) => {
  const text = useTypingMotion({ arrayOfText: phases });

  return (
    <div className="w-full px-0 py-2 text-2xl ">
      <h1 className="  w-full text-center ">Hey I'm Lukasz</h1>
      <div className="  flex h-auto flex-col  text-xl ">
        <p className="text-center ">
          <span className=" ">I like </span>
          <span className="text-bold w-full text-blue-400">
            {"  "}
            {text}
          </span>
          <span className="animate-blink    text-blue-400">|</span>
        </p>

        <div className=""> </div>
      </div>
      <div className="flex flex-col items-center justify-center text-base">
        <h1 className=" pt-4 ">I created this page based on: </h1>
        <a
          className="cursor-pointer text-blue-600  underline"
          href="https://www.figma.com/file/GIrurcGtyHKB5hCkZB4cqM/Startupz---Landing-page?node-id=0%3A1"
          title="corusconsulting.com "
          target="_blank"
          rel="noopener noreferrer"
        >
          figma project
        </a>
      </div>
    </div>
  );
};

export default TypingMotion;

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));
