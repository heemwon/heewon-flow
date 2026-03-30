import Intro from "@/components/sections/intro/Intro";
import IntroOnboarding from "@/components/sections/intro-onboarding/IntroOnboarding";
import IntegratedScroll from "@/components/sections/integrated-scroll/IntegratedScroll";
import Others from "@/components/sections/others/Others";
import Contact from "@/components/sections/contact/Contact";

export default function Home() {
  return (
    <>
      <Intro />
      <IntroOnboarding />

      {/* sticky contents */}
      <IntegratedScroll />

      <Others />
      <Contact />
    </>
  );
}
