import {
  introBaseClass,
  introDescClass,
  introKeywordClass,
  introTitleClass,
} from "./intro.styles";

export default function Intro() {
  return (
    <div className={introBaseClass}>
      <h2 className={introTitleClass}>
        이희원 <br />
        Frontend Engineer
      </h2>

      <strong className={introKeywordClass}>
        SSR · WebView · UX Optimization
      </strong>
      <p className={introDescClass}>
        사용자 경험과 서비스 구조 개선에 강점을 가진 프론트엔드 엔지니어입니다.
        <br />
        SSR 전환, WebView 최적화, 데이터 기반 UX 개선 경험을 아래 프로젝트를
        통해 확인하실 수 있습니다.
      </p>
    </div>
  );
}
