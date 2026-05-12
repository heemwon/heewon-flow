import {
  projectInfoSubTitleClass,
  projectInfoTitleClass,
} from "./projectInfo.styles";

interface TitleProps {
  index: string;
  title: string;
}

export default function Title({ index, title }: TitleProps) {
  return (
    <>
      <span className={projectInfoSubTitleClass}>{`Project ${index}`}</span>
      <h3 className={projectInfoTitleClass}>{title}</h3>
    </>
  );
}
