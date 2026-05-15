import Image from "next/image";
import Link from "next/link";

import {
  projectPreviewBaseClass,
  projectPreviewImgClass,
  projectPreviewTitleClass,
} from "./projectPreview.style";
import { ProjectItemPreview } from "../../_types/projects";

interface ProjectPreview {
  index: number;
  project: ProjectItemPreview;
  href: string;
}

export default function ProjectPreview({
  index,
  project,
  href,
}: ProjectPreview) {
  return (
    <Link href={href} className={projectPreviewBaseClass}>
      <span className={projectPreviewTitleClass}>{project.label}</span>
      <Image
        fill
        src={project.img}
        alt={`${project.label} 프로젝트 미리보기`}
        sizes="(max-width: 768px) 100vw, 50vw"
        className={projectPreviewImgClass}
        priority={index === 0 || index === 1}
      />
    </Link>
  );
}
