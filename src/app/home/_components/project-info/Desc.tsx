import { projectInfoDescClass } from "./projectInfo.styles";

interface DescProps {
  desc: string;
}

export default function Desc({ desc }: DescProps) {
  return <p className={projectInfoDescClass}>{desc}</p>;
}
