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
  links: { href: string; label: string }[];
  className?: string;
};

const NavDesktop = ({ links, className }: Props) => {
  const actions = useSetActiveLinkActions();
  const activeLink = useActiveLink();

  useEffect(() => {
    if (!activeLink)
      actions.setActiveLink(window.location.pathname + window.location.hash);
  }, [actions, activeLink]);
  if (!activeLink) return null;

  return (
    <nav className={cn(``, className)}>
      <ul className="flex gap-4">
        {links.map(({ href, label }) => (
          <li
            key={`${href}${label}`}
            onClick={() => {
              actions.setActiveLink(href);
            }}
            className={cn(
              ` my-2 flex items-center justify-center text-xl transition-all  duration-300 hover:text-cyan
              `,

              href == activeLink && " text-cyan",
              href.includes("work") &&
                "rounded-full border-2 border-cyan px-8 py-2 text-cyan hover:bg-cyan hover:text-white",
            )}
          >
            <Link href={href} className="  ">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavDesktop;
