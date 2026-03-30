import Image from "next/image";

export default function Character() {
  return (
    <div
      aria-hidden="true"
      className="absolute bottom-0 left-1/2 z-[300] w-[400px] h-[520px] -translate-x-1/2 md:w-[540px] md:h-[700px]"
    >
      <Image
        src="/images/characters/img-character-basket.png"
        fill
        sizes="540px"
        alt=""
        priority
      />
    </div>
  );
}
