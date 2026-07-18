export interface Character {
  id: number;
  src: string;
  name: string;
  x: string;
  y: string;
}

export const CHARACTERS_DATA: Character[] = [
  {
    id: 1,
    src: "/images/characters/img-character-alien.png",
    name: "레거시 Next.js SSR로 전면 개편",
    x: "25%",
    y: "45%",
  },
  {
    id: 2,
    src: "/images/characters/img-character-cowboy.png",
    name: "B2C 연봉 비교 리포트",
    x: "30%",
    y: "15%",
  },
  {
    id: 3,
    src: "/images/characters/img-character-grandfa.png",
    name: "Nuxt.js 리팩토링 & WA 마크 획득",
    x: "70%",
    y: "20%",
  },
  {
    id: 4,
    src: "/images/characters/img-character-ufo.png",
    name: "B2B 연봉 적정성 분석 리포트",
    x: "80%",
    y: "50%",
  },
];
