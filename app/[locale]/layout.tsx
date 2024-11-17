import type { Metadata } from "next";
import "../../app/globals.css"
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
    title: "Mistral Loysnir - Kervisverkfrøðingur",
    description: "Full Stack & PLC automatiónsforritari og KT-verkfrøðingur",
    openGraph:  {
        type: 'website',
        siteName: 'Mistral Loysnir',
        title: 'Kervisverkfrøðingur',
        description: 'Full Stack & PLC automatiónsforritari og KT-verkfrøðingur',
        images: [
            {
                url: 'https://res.cloudinary.com/dawkzelzc/image/upload/v1731416599/ldnr4zkz0ghmydvy8urg.png',
            },
        ],
    }
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
