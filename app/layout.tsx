import "@/app/globals.css"

import { clsx } from "clsx";
import { type Metadata } from "next";
import { Inter } from "next/font/google";

import { DATA } from "@/data";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navbar";
import { PageWrapper } from "@/components/page-wrapper";
import { Providers } from "@/app/providers";
import { StarsBackground } from "@/components/backgrounds/stars";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: {
    default: DATA.home.hero.name,
    template: `%s | ${DATA.home.hero.name}`,
  },
  description: DATA.home.hero.subtitle,
  openGraph: {
    title: {
      default: DATA.home.hero.name,
      template: `%s | ${DATA.home.hero.name}`,
    },
    description: DATA.home.hero.subtitle,
    siteName: DATA.home.hero.name,
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: {
      default: DATA.home.hero.name,
      template: `%s | ${DATA.home.hero.name}`,
    },
    card: "summary_large_image",
  },
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  const content = (
    <main className="bg-background min-h-screen bg-gradient-to-b from-background to-content2">
      <Navigation />
      <PageWrapper>{children}</PageWrapper>
      <Footer />
    </main>
  );

  return (
    <html suppressHydrationWarning lang="en">
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable,
        )}
      >
        <Providers
          themeProps={{
            attribute: "class",
            defaultTheme: "dark",
          }}
        >
          <StarsBackground>{content}</StarsBackground>
        </Providers>
      </body>
    </html>
  );
}
