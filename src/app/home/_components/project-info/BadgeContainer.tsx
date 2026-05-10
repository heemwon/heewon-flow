import Badge from "@design-system/components/badge/Badge";
import { ProjectItemBadge } from "../../_types/projects";
import { projectInfoBadgesClass } from "./projectInfo.styles";

interface BadgeContainerProps {
  badges: ProjectItemBadge[];
}

export default function BadgeContainer({ badges }: BadgeContainerProps) {
  return (
    <ul className={projectInfoBadgesClass}>
      {badges.map((badge) => (
        <li key={badge.label}>
          <Badge variant={badge.variant}>{badge.label}</Badge>
        </li>
      ))}
    </ul>
  );
}
