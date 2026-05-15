import { ReactNode } from "react";

import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";
import Main from "./main/Main";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="relative min-h-screen lg:static lg:flex ">
      <Sidebar />

      <div className="flex flex-col flex-1">
        <Header />
        <Main>{children}</Main>
      </div>
    </div>
  );
}
