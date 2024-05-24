import Navigation from '@/components/Navigation';

import type { Metadata } from 'next';
import Aside from '@/components/Aside';
import Footer from '@/components/Footer';

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navigation />
      <div className="flex flex-row">
        <Aside />
        <main className="flex flex-row min-h-screen flex-col items-center justify-between  xl:ml-64 lg:ml-48 ">
          {children}
        </main>
      </div>
      {/* <Footer /> */}
    </>
  );
}
