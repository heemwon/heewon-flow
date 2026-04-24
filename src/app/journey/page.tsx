import JourneyLayout from "./_components/JourneyLayout";
import ContactSection from "./_sections/ContactSection";
import IntegratedScroll from "./_sections/IntegratedScroll";
import IntroOnboardingSection from "./_sections/IntroOnboardingSection";
import IntroSection from "./_sections/IntroSection";
import OthersSection from "./_sections/OthersSection";

export default function JourneyPage() {
  return (
    <JourneyLayout>
      <IntroSection />
      <IntroOnboardingSection />

      {/* sticky contents */}
      <IntegratedScroll />

      <OthersSection />
      <ContactSection />
    </JourneyLayout>
  );
}
