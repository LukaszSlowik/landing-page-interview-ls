import { DictionaryType } from "@/lib/dictionary";
import Logo from "@/svgs/logo";
import Link from "next/link";
import React from "react";
import { FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

type Props = {
  dictionary: DictionaryType;
};

const Footer = ({ dictionary }: Props) => {
  const { footer } = dictionary;
  return (
    <footer className=" bg-bg text-fg max-xl:px-2 ">
      <div className="max-w-custom-max mx-auto grid grid-cols-2 content-center gap-12 py-28 max-sm:grid-cols-1 md:grid-cols-4">
        <div className="flex flex-col justify-between max-sm:order-last max-sm:space-y-12">
          <Logo className="" />
          <div className="  italic">
            © 2020 Startupz.
            <br /> All rights reserved.
          </div>
        </div>
        <div className="flex flex-col justify-between ">
          <h3 className="pb-4 text-2xl font-semibold">{footer.companies}</h3>
          <ul className="space-y-2">
            <li className="text-cyan hover:opacity-70">
              <Link href={`/`}>Tolq</Link>
            </li>

            <li className="text-cyan hover:opacity-70">
              <Link href={`/`}>LegalSite </Link>
            </li>
            <li className="text-cyan hover:opacity-70">
              <Link href={`/`}>Codekeeper</Link>
            </li>
            <li className="text-cyan hover:opacity-70">
              <Link href={`/`}>Feedback Labs</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col justify-between ">
          <h3 className="pb-4 text-2xl font-semibold">{footer.contact}</h3>
          <address>
            World Trade Center - The Hague <br />
            Prinses Margrietplantsoen 33 <br />
            2595 AM The Hague <br />
            The Netherlands <br />
          </address>
          <a
            href="mailto:lukasz.slowik.osw@gmail.com"
            className="py-4 text-cyan hover:opacity-70"
          >
            {footer.sendemial}
          </a>
        </div>
        <div className="flex flex-col  ">
          <h3 className="pb-4 text-2xl font-semibold">{footer.foolowus}</h3>
          <ul className="space-y-4 text-cyan">
            <li className="cursor-pointer hover:text-opacity-70">
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="text-2xl" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-2xl" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-2xl" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
