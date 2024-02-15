"use client";
import { useTheme } from "next-themes";
import React from "react";
import Moon from "@/svgs/moon";
import Sun from "@/svgs/sun";
import { cn } from "@/lib/utils";

type Props = {};

const ThemeSwitcher = (props: Props) => {
  const { theme, setTheme } = useTheme();
  return (
    <div>
      <button
        onClick={() => setTheme("dark")}
        className={cn(` hover:text-primary   block dark:hidden  `)}
      >
        <Sun />
      </button>
      <button
        onClick={() => setTheme("light")}
        className={cn(` hover:text-primary hidden dark:block`)}
      >
        <Moon />
      </button>
    </div>
  );
};

export default ThemeSwitcher;
