import { HEADER_DATA } from "@/constants/header";
import ThemeToggle from "./ThemeToggle";
import ScrollProgress from "./ScrollProgress";
import ClientOnly from "../ClientOnly";

export default function Header() {
  return (
    <header className="sticky top-0 left-0 z-[500] border-b border-gray-light backdrop-blur-[20px] backdrop-saturate-[180%] bg-white/40 dark:bg-brand-primary/50 dark:border-gray-medium">
      <div className="flex flex-row-reverse flex-end justify-between items-center p-[8px_12px] md:flex-row md:p-[8px_16px]">
        <h1 className="sr-only font-gmarket text-title-2 leading-title-2 text-brand-primary md:not-sr-only dark:text-white">
          <span className="md:hidden lg:inline-block lg:mr-[12px]">
            LEEHEEWON{" "}
          </span>
          PORTFOLIO
        </h1>
        <nav>
          <ul className="flex gap-[12px]">
            {HEADER_DATA.map((header) => (
              <li key={header.id}>
                <a
                  href={`#${header.id}`}
                  className="flex justify-center items-center p-[0_4px] min-h-[44px] rounded-[8px] font-gmarket text-title-5 leading-title-5 text-gray-dark outline-gray-dark transition hover:relative hover:z-0 hover:before:content[''] hover:before:absolute hover:before:top-[10px] hover:before:-right-[4px] hover:before:-z-1 hover:before:w-[8px] hover:before:h-[8px] hover:before:rounded-[12px] hover:before:bg-brand-point focus-visible:rounded-[4px] md:text-title-4 md:leading-title-4 dark:text-white"
                >
                  {header.name}
                </a>
              </li>
            ))}
            <li>
              <ThemeToggle />
            </li>
          </ul>
        </nav>
      </div>
      <ClientOnly>
        <ScrollProgress />
      </ClientOnly>
    </header>
  );
}
