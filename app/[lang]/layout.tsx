import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "../globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider";
import Header from "@/components/header";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import Footer from "@/components/footer";
import Assistant from "@/components/assistant";

//const inter = Inter({ subsets: ["latin"] });
const circularStdFont = localFont({
  src: "../fonts/FontsFree-Net-Circular-Std-Medium.ttf",
  display: "block",
});
export const metadata: Metadata = {
  title: "StartupZ - recruitment project",
  description: "StartupZ - recruitment project",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(params.lang);
  const links = [
    // { href: `/${params.lang}`, label: dictionary.navigation.home },
    {
      href: `/${params.lang}#startups`,
      label: dictionary.navigation["startups"],
    },
    {
      href: `/${params.lang}#contact`,
      label: dictionary.navigation.contact,
    },
    {
      href: `/${params.lang}#workwithus`,
      label: dictionary.navigation.workwithus,
    },
  ];

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/img/favicon.ico" sizes="any" />
      </head>
      <body className={`${circularStdFont.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen bg-bg  text-fg">
            <Header lang={params.lang} dictionary={dictionary} links={links} />
            {children}
            <Assistant dictionary={dictionary} />
            <Footer dictionary={dictionary} />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
