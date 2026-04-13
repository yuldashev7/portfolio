import { GoogleTagManager } from '@next/third-parties/google';
import { Inter } from 'next/font/google';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LanguageProvider } from '@/providers/language-provider';
import SmoothScrollProvider from '@/providers/smooth-scrool-prvider';
import Footer from './components/footer';
import ScrollToTop from './components/helper/scroll-to-top';
import Navbar from './components/navbar';
import './css/card.scss';
import './css/shadcn.css';
import './css/globals.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Yuldashev Faxriddin portfoliosi - Frontend dasturchi',
  description:
    'Bu Faxriddin Yuldashevning portfoliosi. Men responsive va qulay web ilovalar yaratishga qiziqadigan Frontend dasturchiman.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="uz">
      <body className={inter.className}>
        <ToastContainer />
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
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  );
}
