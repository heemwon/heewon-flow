import Image from "next/image";

export default function Character() {
  return (
    <div
      aria-hidden="true"
      className="absolute bottom-[50px] left-1/2 z-[110] w-[200px] h-[200px] -translate-x-1/2 animate-floating [animation-delay:.1s] md:bottom-[70px]"
    >
      <Image
        fill
        src="/images/characters/img-character-intro.png"
        alt="intro character"
        priority
        sizes="200px"
      />
    </div>
  );
}
