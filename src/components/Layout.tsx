// Layout.tsx
"use client";

import { Header1 } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer-section";

export default function Layout({ children }: { children: React.ReactNode }) {
    
  return (
    <div className="flex flex-col min-h-screen">
      <Header1 />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
