"use client";
import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  openMobile: boolean;
  setOpenMobile: (openMobile: boolean) => void;
  scroll: boolean;
};

const Hamburger = ({ openMobile, setOpenMobile, scroll }: Props) => {
  return (
    <div
      className="z-[999] mr-4 cursor-pointer   transition-all duration-1000 lg:hidden"
      onClick={() => setOpenMobile(!openMobile)}
    >
      <div
        className={cn(
          `mb-1 h-[4px] w-[36px]  bg-fg transition-all duration-700 `,
          openMobile && `translate-y-[200%] rotate-45`,
          // (!scroll || openMobile) && `bg-white`,
        )}
      ></div>
      <div
        className={cn(
          `mb-1 h-[4px] w-[36px] bg-fg transition-all duration-700  `,
          openMobile && `opacity-0`,
          // !scroll && `bg-white`,
        )}
      ></div>
      <div
        className={cn(
          `mb-1 h-[4px] w-[36px]  bg-fg transition-all duration-700 `,
          openMobile && `translate-y-[-200%] rotate-[135deg]`,
          // (!scroll || openMobile) && `bg-white`,
        )}
      ></div>
    </div>
  );
};

export default Hamburger;
