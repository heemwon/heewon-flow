import Link from "next/link";

import {
  headerBaseClass,
  headerInnerClass,
  headerLinkClass,
  headerNavClass,
  headerResumeClass,
  headerTitleClass,
} from "./header.styles";

export default function Header() {
  return (
    <header className={headerBaseClass}>
      <div className={headerInnerClass}>
        <Link href="/" className={headerTitleClass}>
          Heewon Flow
        </Link>
        <nav aria-label="홈 주요 링크" className={headerNavClass}>
          <a href="#projects" className={headerLinkClass}>
            Projects
          </a>
          <a
            href="/leeheewon-frontend-portfilo.pdf"
            target="_blank"
            className={headerResumeClass}
          >
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
}
