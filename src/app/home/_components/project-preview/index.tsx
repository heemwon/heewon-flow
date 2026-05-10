import Image from "next/image";
import Link from "next/link";

import {
  projectPreviewBaseClass,
  projectPreviewTitleClass,
} from "./projectPreview.style";
import { ProjectItemPreview } from "../../_types/projects";

interface ProjectPreview {
  project: ProjectItemPreview;
  href: string;
}

export default function ProjectPreview({ project, href }: ProjectPreview) {
  return (
    <Link href={href} className={projectPreviewBaseClass}>
      <span className={projectPreviewTitleClass}>{project.label}</span>
      <Image
        fill
        sizes="620px"
        style={{ objectFit: "cover", borderRadius: 10 }}
        priority
        src={project.img}
        alt="포트폴리오 스크린샷 이미지"
      />
    </Link>
  );
}
