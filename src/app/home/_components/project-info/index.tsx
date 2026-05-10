import { ProjectList } from "../../_types/projects";
import BadgeContainer from "./BadgeContainer";
import ButtonContainer from "./ButtonContainer";
import Desc from "./Desc";
import { projectInfoBaseClass } from "./projectInfo.styles";
import Title from "./Title";

interface ProjectInfoProps {
  project: ProjectList;
}

export default function ProjectInfo({ project }: ProjectInfoProps) {
  const { index, title, badges, desc, button } = project;

  return (
    <div className={projectInfoBaseClass}>
      <Title index={index} title={title} />
      <BadgeContainer badges={badges} />
      <Desc desc={desc} />
      <ButtonContainer button={button} />
    </div>
  );
}
