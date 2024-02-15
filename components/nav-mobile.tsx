"use client";

import { Locale } from "@/i18n.config";
import { cn } from "@/lib/utils";
import {
  useActiveLink,
  useSetActiveLinkActions,
} from "@/store/active-link-store";
import Logo from "@/svgs/logo";
import Link from "next/link";
import React, { useEffect } from "react";

type Props = {
  openMobile: boolean;
  setOpenMobile: React.Dispatch<React.SetStateAction<boolean>>;
  lang: Locale;
  links: { href: string; label: string }[];
};

const NavMobile = ({ openMobile, setOpenMobile, links }: Props) => {
  const actions = useSetActiveLinkActions();
  const activeLink = useActiveLink();

  useEffect(() => {
    if (!activeLink)
      actions.setActiveLink(window.location.pathname + window.location.hash);
  }, [actions, activeLink]);
  if (!activeLink) return null;

  return (
    <nav
      className={cn(
        `  fixed bottom-[40px] left-0 right-0 top-0 overflow-y-auto  overflow-x-hidden bg-[#cbcfc9]    transition-all duration-500 ease-in-out   lg:hidden`,
        openMobile && ` translate-x-0 `,
        !openMobile && `translate-x-[100%]`,
      )}
    >
      <div className="px-4 py-6">
        <Logo />
      </div>
      <ul>
        {links.map(({ href, label }) => (
          <li
            key={`${href}${label}`}
            onClick={() => {
              actions.setActiveLink(href);
            }}
            className={cn(
              ` my-12 flex items-center justify-center text-xl transition-all  duration-300 hover:text-cyan
                `,

              href == activeLink && " text-cyan",
              href.includes("work") &&
                "mx-auto w-fit rounded-full border-2 border-cyan px-8  py-2 text-cyan hover:bg-cyan hover:text-white",
            )}
          >
            <Link
              onClick={() => setOpenMobile(false)}
              href={href}
              className="  "
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavMobile;
