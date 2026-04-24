import { ReactNode } from "react";

import SkipNav from "@shared/ui/SkipNav";
import { ThemeProvider } from "./_providers/ThemeProvider";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

interface JourneyLayoutProps {
  children: ReactNode;
}

export default function JourneyLayout({ children }: JourneyLayoutProps) {
  return (
    <ThemeProvider>
      <SkipNav href="#mainContent" title="본문 바로가기" />
      <Header />
      <main id="mainContent">{children}</main>
      <Footer />
    </ThemeProvider>
  );
}
