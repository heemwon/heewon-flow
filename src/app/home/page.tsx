import Intro from "./_components/intro";
import HomeLayout from "./_components/layout";
import ProjectInfo from "./_components/project-info";
import ProjectPreview from "./_components/project-preview";
import { PROJECT_LIST } from "./_constants/projects";

export default function HomePage() {
  return (
    <HomeLayout>
      <Intro />

      {PROJECT_LIST.map((project) => (
        <div
          key={project.title}
          className="flex items-center gap-xxxl max-w-[1040px]"
        >
          <ProjectPreview
            key={project.title}
            project={project.preview}
            href={project.button.href}
          />
          <ProjectInfo project={project} />
        </div>
      ))}
    </HomeLayout>
  );
}
