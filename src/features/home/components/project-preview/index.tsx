import Image from "next/image";
import Link from "next/link";

import {
  projectPreviewBaseClass,
  projectPreviewImgClass,
  projectPreviewTitleClass,
} from "./projectPreview.style";
import { ProjectItemPreview } from "../../types/projects";

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
    <Link
      href={href}
      className={projectPreviewBaseClass}
      aria-label={`${project.label}: ${project.title} 프로젝트로 이동`}
    >
      <span className={projectPreviewTitleClass}>{project.label}</span>
      <Image
        fill
        src={project.img}
        alt=""
        sizes="(max-width: 768px) calc(100vw - 40px), 620px"
        className={projectPreviewImgClass}
        priority={index === 0}
      />
    </Link>
  );
}
