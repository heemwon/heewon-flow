import { ReactNode } from "react";
import { mainBaseClass } from "./main.styles";

interface MainProps {
  children: ReactNode;
}
export default function Main({ children }: MainProps) {
  return <main className={mainBaseClass}>{children}</main>;
}
