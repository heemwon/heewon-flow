import Trees from "./components/Trees";
import Clouds from "./components/Clouds";
import CloudBlurs from "./components/CloudBlurs";
import Character from "./components/Character";
import Stars from "./components/Stars";
import ScrollIndicator from "./components/ScrollIndicator";

import Floor from "../../_components/Floor";

export default function IntroSection() {
  return (
    <section
      id="intro"
      className="overflow-hidden relative w-full h-[calc(100vh-61px)] bg-bg-light md:h-[calc(100vh-63px)] dark:bg-brand-primary"
    >
      {/* background */}
      <Stars />
      <Clouds />
      <CloudBlurs />
      <Trees />

      {/* character */}
      <Character />
      <ScrollIndicator />

      {/* bottom floor */}
      <Floor />
    </section>
  );
}
