import { ReactNode } from "react";

import {
  containerBaseClass,
  containerDescBaseClass,
  containerInfoBaseClass,
  containerTitleBaseClass,
} from "./container.styles";

interface ContainerProps {
  title: string;
  desc: string;
  children: ReactNode;
}

export default function Container({ title, desc, children }: ContainerProps) {
  return (
    <section className={containerBaseClass}>
      <div className={containerInfoBaseClass}>
        <h3 className={containerTitleBaseClass}>{title}</h3>
        <p className={containerDescBaseClass}>{desc}</p>
      </div>
      {children}
    </section>
  );
}
