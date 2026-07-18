import Button from "@design-system/components/button/Button";
import {
  introActionsClass,
  introBaseClass,
  introDescClass,
  introKeywordClass,
  introKeywordListClass,
  introMetaClass,
  introTitleClass,
} from "./intro.styles";

const KEYWORDS = ["SSR 전환", "WebView 최적화", "데이터 기반 UX 개선"];
const META_ITEMS = [
  { label: "Focus", value: "Product UX" },
  { label: "Stack", value: "Next.js · TypeScript" },
  { label: "Output", value: "Dashboard · Interaction" },
];

export default function Intro() {
  return (
    <section className={introBaseClass} aria-labelledby="homeTitle">
      <span className={introMetaClass}>Frontend Engineer Portfolio</span>
      <h1 id="homeTitle" className={introTitleClass}>
        이희원 <br />
        Frontend Engineer
      </h1>

      <ul className={introKeywordListClass} aria-label="핵심 역량">
        {KEYWORDS.map((keyword) => (
          <li key={keyword} className={introKeywordClass}>
            {keyword}
          </li>
        ))}
      </ul>
      <p className={introDescClass}>
        사용자 경험과 서비스 구조 개선에 강점을 가진 프론트엔드 엔지니어입니다.
        <br />
        SSR 전환, WebView 최적화, 데이터 기반 UX 개선 경험을 아래 프로젝트를
        통해 확인하실 수 있습니다.
      </p>

      <div className={introActionsClass}>
        <Button as="a" href="#projects">
          프로젝트 보기
        </Button>
        <Button
          as="a"
          href="/leeheewon-frontend-portfilo.pdf"
          target="_blank"
          variant="secondary"
        >
          이력서 PDF
        </Button>
      </div>

      <dl className="grid grid-cols-1 gap-xs pt-lg w-full border-t border-gray-200 md:grid-cols-3 md:pt-xl">
        {META_ITEMS.map((item) => (
          <div key={item.label}>
            <dt className="text-caption-xs text-gray-500">{item.label}</dt>
            <dd className="mt-xxs text-label-md text-gray-900">
              {item.value}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
