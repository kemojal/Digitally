import Navigation from "@/components/Navigation";

import type { Metadata } from "next";
import Footer from "@/components/Footer";
import ProfileAside from "@/components/Aside/ProfileAside";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navigation />
      <div className="flex flex-row">
        <ProfileAside />
        <main className="flex flex-row min-h-screen flex-col items-center justify-between  xl:ml-64 lg:ml-48  lg:w-[calc(100%-48px)] xl:w-[calc(100%-64px)]">
          {children}
        </main>
      </div>
      {/* <Footer /> */}
    </>
  );
}
