"use client";
import React from "react";
import Link from "next/link";
import { Locale, i18n } from "@/i18n.config";
import { cn } from "@/lib/utils";

import { usePathname } from "next/navigation";
import DropDownRadix from "./drop-down";
import ChevronDown from "@/svgs/chevron-down";
type Props = {
  lang: Locale;
  className?: string;
};

const LocalSwitcher = ({ lang, className }: Props) => {
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();

  const redirectPathName = (lang: string) => {
    if (!pathname) return "/";
    const segments = pathname.split("/");
    segments[1] = lang;
    return segments.join("/");
  };

  return (
    <>
      <DropDownRadix
        open={open}
        setOpen={setOpen}
        trigger={
          <button
            onClick={() => setOpen(true)}
            onMouseEnter={() => setOpen(true)}
            // }}
            className={cn(
              `max-xxs:mr-2 mr-12  flex h-full items-center gap-1 py-2  transition-transform duration-300 focus-visible:outline-none   `,
            )}
          >
            <span className="font-bold uppercase">{lang}</span>{" "}
            <ChevronDown
              className={cn(
                `h-6 w-6 overflow-hidden transition-all duration-500`,
                open && `rotate-180 `,
              )}
            />
          </button>
        }
      >
        <div
          onMouseLeave={(e) => {
            setOpen(false);
          }}
          className={cn(
            `bg-dark relative  border-[2px]  opacity-90  shadow-header `,
          )}
        >
          {i18n.locales.map((locale, index) => {
            return (
              <DropDownRadix.Item key={locale}>
                <Link
                  className="dark:hover:text-primary relative block  bg-bg px-8 py-2  transition hover:bg-[#e6e6e6] hover:text-cyan dark:hover:bg-white"
                  href={redirectPathName(locale)}
                >
                  {locale}
                </Link>
              </DropDownRadix.Item>
            );
          })}
        </div>
      </DropDownRadix>
    </>
  );
};

export default LocalSwitcher;
