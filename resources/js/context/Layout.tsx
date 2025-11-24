import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import LiveStream from '@/components/LiveStream';
import { usePage } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Head } from '@inertiajs/react';
import WhatsapFlotante from '@/components/WhatsapFlotante';

interface LayoutProps {
  children: React.ReactNode;
  category_interna?: string;
  noIndex?: boolean;
}

export default function Layout({ children, category_interna, noIndex = true }: LayoutProps) {
  const [showLiveStream, setShowLiveStream] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      AOS.init({ duration: 1000 });
    }
  }, []);

  const { pages } = usePage().props as { pages?: { ad?: string } };

  return (
    <>

      <div className="min-h-screen flex flex-col" >
        <Header category_interna={category_interna} setShowLiveStream={setShowLiveStream} adImage={pages?.ad} />
        {showLiveStream && <LiveStream />}

        <main className="flex-1 z-1 py-[45px] lg:py-[95px] flex items-center flex-col max-w-[1280px] mx-auto">
          {children}
        </main>
      </div>
      <WhatsapFlotante />

      <Footer />
    </>
  );
}
