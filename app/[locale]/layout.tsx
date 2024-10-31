import type { Metadata } from "next";
import "../../app/globals.css"
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Kambsdev - Portfolio",
  description: "I am you Full Stack Automation and Web developer",
};

export default async function LocaleLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  return (
    <html lang={locale} >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap" rel="stylesheet"/>
      </head>
      <body
        className={`antialiased font-["Nunito"]`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
