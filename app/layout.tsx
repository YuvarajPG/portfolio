import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { PageLoader } from "@/components/PageLoader";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/sections/Footer";
import { TooltipProvider } from "@/components/ui/skiper-ui/skiper101";
import Script from "next/script";

export const metadata = {
  metadataBase: new URL("https://yuvaraj-porfolio.vercel.app/"),
  title: "YUVARAJ PG — Web Developer Portfolio",
  description: "Portfolio of Yuvaraj PG — Building digital applications and web interfaces with attention to detail and performance.",
  icons: {
    icon: "/portfolio_icon.png",
  },
  openGraph: {
    title: "YUVARAJ PG — Web Developer Portfolio",
    description: "Portfolio of Yuvaraj PG — Building digital applications and web interfaces with attention to detail and performance.",
    url: "https://yuvaraj-porfolio.vercel.app/",
    siteName: "YUVARAJ PG",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "YUVARAJ PG — Web Developer Portfolio",
    description: "Portfolio of Yuvaraj PG — Building digital applications and web interfaces with attention to detail and performance.",
  },
  keywords: ["YUVARAJ PG", "Yuvaraj", "Portfolio", "Web Developer", "React", "Next.js", "TypeScript"],
  authors: [{ name: "Yuvaraj PG", url: "https://yuvaraj-porfolio.vercel.app/" }],
  creator: "Yuvaraj PG",
  publisher: "Yuvaraj PG",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark scroll-smooth" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <link rel="shortcut icon" href="/fav_icon.png" type="image/x-icon" />
        <Script
          id="theme-initializer"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var storedTheme = localStorage.getItem('portfolio-theme');
                  var root = document.documentElement;
                  if (storedTheme === 'light') {
                    root.classList.remove('dark');
                    root.classList.add('light');
                  } else {
                    root.classList.add('dark');
                    root.classList.remove('light');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="overflow-x-hidden relative bg-theme text-theme-main antialiased">
        <ThemeProvider>
          <TooltipProvider>
            <PageLoader />
            <main className="relative z-10">{children}</main>
            <Footer />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
