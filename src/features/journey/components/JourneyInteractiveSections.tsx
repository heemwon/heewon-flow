"use client";

import dynamic from "next/dynamic";

const IntroOnboardingSection = dynamic(
  () => import("../sections/IntroOnboardingSection")
);
const IntegratedScroll = dynamic(() => import("../sections/IntegratedScroll"));
const OthersSection = dynamic(() => import("../sections/OthersSection"));
const ContactSection = dynamic(() => import("../sections/ContactSection"));

export default function JourneyInteractiveSections() {
  return (
    <>
      <IntroOnboardingSection />
      <IntegratedScroll />
      <OthersSection />
      <ContactSection />
    </>
  );
}
