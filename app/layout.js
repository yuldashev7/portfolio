import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LanguageProvider } from "@/providers/language-provider";
import SmoothScrollProvider from "@/providers/smooth-scrool-prvider";
import Footer from "./components/footer";
import ScrollToTop from "./components/helper/scroll-to-top";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/shadcn.css";
import "./css/globals.scss";
import CyberCursor from "./components/cursor-animate";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Faxriddin Yuldashev Portfolio - Frontend Developer",
  description:
    "This is the portfolio of Faxriddin Yuldashev. I am a Frontend Developer passionate about creating responsive and user-friendly web applications.",
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer />

        <CyberCursor />

        <LanguageProvider>
          <SmoothScrollProvider>
            <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-280 xl:max-w-304 2xl:max-w-368 text-white">
              <Navbar />
              {children}
              <ScrollToTop />
            </main>
          </SmoothScrollProvider>
          <Footer />
        </LanguageProvider>

        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
      </body>
    </html>
  );
}
