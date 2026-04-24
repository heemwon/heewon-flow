import Image from "next/image";

import HintBubble from "../../../_components/HintBubble";

export default function Character() {
  return (
    <div
      aria-hidden="true"
      className="group absolute bottom-[50px] left-1/2 z-[110] w-[150px] h-[150px] -translate-x-1/2 animate-floating [animation-delay:.1s] cursor-pointer md:bottom-[70px] md:w-[200px] md:h-[200px]"
    >
      <HintBubble
        message={`캐릭터부터 배경까지, \n이 화면의 모든 요소는 제가 직접 한 땀 한 땀 그렸어요! 🎨`}
        className="opacity-0 top-[-120px] w-[220px] rounded-full text-center whitespace-pre-wrap transition-opacity group-hover:opacity-[1]"
      />
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
