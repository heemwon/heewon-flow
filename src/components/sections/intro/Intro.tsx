import Floor from "@/components/common/Floor";
import Trees from "./Trees";
import Clouds from "./Clouds";
import CloudBlurs from "./CloudBlurs";
import Character from "./Character";
import Stars from "./Stars";
import ScrollIndicator from "./ScrollIndicator";

export default function Intro() {
  return (
    <section
      id="intro"
      className="overflow-hidden relative w-full h-[calc(100vh-49px)] bg-bg-light md:h-[calc(100vh-61px)] dark:bg-brand-primary"
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
