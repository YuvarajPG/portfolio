import "./globals.css";
import NavbarV2 from "@/components/custom/NavbarV2";
import Footer from "@/components/custom/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
export const metadata = {
  metadataBase: new URL("https://yuvaraj-porfolio.vercel.app/"),
  title: "Yuvaraj Portfolio",
  description: "Portfolio of Yuvaraj - A passionate Web Developer specializing in React, Next.js, and modern web technologies.",
  icons: {
    icon: "/portfolio_icon.png",
  },
  openGraph: {
    title: "Yuvaraj Portfolio",
    description: "Portfolio of Yuvaraj - A passionate Web Developer specializing in React, Next.js, and modern web technologies.",
    url: "https://yuvaraj-porfolio.vercel.app/",
    siteName: "Yuvaraj Portfolio",
    images: [
      {
        url: "/portfolio_icon.png",
        width: 1200,
        height: 630,
        alt: "Yuvaraj Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yuvaraj Portfolio",
    description: "Portfolio of Yuvaraj - A passionate Web Developer specializing in React, Next.js, and modern web technologies.",
    images: ["/portfolio_icon.png"],
  },
  keywords: ["Yuvaraj", "Portfolio", "Web Developer", "React", "Next.js", "Tailwind CSS", "JavaScript", "Frontend Developer"],
  authors: [{ name: "Yuvaraj", url: "https://yuvaraj-porfolio.vercel.app/" }],
  creator: "Yuvaraj",
  publisher: "Yuvaraj",
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
  alternates: {
    canonical: "/",
  },
};


export default function Layout({ children }) {
  return (
    <html>
      <head>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
        <link rel="shortcut icon" href="/portfolio_icon.png" type="image/x-icon" />
      </head>
      <body className="overflow-x-hidden relative">
        {/* <Navbar /> */}
        <NavbarV2 />
        {children}
        <Footer />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
