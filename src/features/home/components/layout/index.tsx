import { ReactNode } from "react";

import Header from "./header";
import Main from "./main";

interface HomeLayoutProps {
  children: ReactNode;
}

export default function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <div>
      <Header />
      <Main>{children}</Main>
    </div>
  );
}
