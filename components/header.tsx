"use client";
import { cn } from "@/lib/utils";
import { useMotionValueEvent, useScroll } from "framer-motion";

import React, { useEffect, useState } from "react";
import Hamburger from "./hamburger";
import NavMobile from "./nav-mobile";
import { Locale } from "@/i18n.config";
import { DictionaryType } from "@/lib/dictionary";
import Logo from "@/svgs/logo";
import ThemeSwitcher from "./theme-switcher";
import NavDesktop from "./nav-desktop";
import LocalSwitcher from "./local-switcher";
import Link from "next/link";
type Props = {
  lang: Locale;
  dictionary: DictionaryType;
  links: { href: string; label: string }[];
};

const Header = ({ lang, dictionary, links }: Props) => {
  const { scrollY } = useScroll();
  const [scroll, setScroll] = React.useState(false);
  const [openMobile, setOpenMobile] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    console.log("Page scroll: ", latest);
    if (latest > 70 && !scroll) {
      setScroll(true);
    }
    if (latest < 70 && scroll) {
      setScroll(false);
    }
  });

  return (
    <header
      className={cn(
        ` fixed inset-0 z-[999] h-header bg-bg p-4 text-fg`,
        scroll && `  shadow-header`,
      )}
    >
      <div className=" max-w-custom-max mx-auto flex items-center justify-between ">
        <Link href={`/${lang}`}>
          <Logo className="max-xs:hidden overflow-visible" />
        </Link>
        <div className="flex items-center justify-end gap-12 max-sm:gap-2">
          <NavDesktop className="max-lg:hidden" links={links} />
          <ThemeSwitcher />
          <LocalSwitcher lang={lang} />
          <Hamburger
            openMobile={openMobile}
            setOpenMobile={setOpenMobile}
            scroll={scroll}
          />
        </div>
      </div>
      <NavMobile
        lang={lang}
        openMobile={openMobile}
        setOpenMobile={setOpenMobile}
        links={links}
      />
    </header>
  );
};

export default Header;
