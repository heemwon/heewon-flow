import Link from "next/link";

import Button from "@design-system/components/button/Button";
import { ProjectItemButton } from "../../_types/projects";
import { projectInfoButtonsClass } from "./projectInfo.styles";

interface ButtonContainerProps {
  button: ProjectItemButton;
}

export default function ButtonContainer({ button }: ButtonContainerProps) {
  return (
    <div className={projectInfoButtonsClass}>
      <Button
        as={Link}
        href={button.href}
        key={button.label}
        variant={button.variant}
      >
        {button.label}
      </Button>
      <Button
        as="a"
        href="https://github.com/heemwon/my-walking-portfolio"
        variant="secondary"
        target="_blank"
      >
        Github
      </Button>
    </div>
  );
}
