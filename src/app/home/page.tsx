import Intro from "./_components/intro";
import HomeLayout from "./_components/layout";
import ProjectInfo from "./_components/project-info";
import ProjectPreview from "./_components/project-preview";
import { PROJECT_LIST } from "./_constants/projects";
import { homeBaseClass } from "./home.styles";

export default function HomePage() {
  return (
    <HomeLayout>
      <Intro />

      {PROJECT_LIST.map((project, index) => (
        <div key={project.title} className={homeBaseClass}>
          <ProjectPreview
            key={project.title}
            index={index}
            project={project.preview}
            href={project.button.href}
          />
          <ProjectInfo project={project} />
        </div>
      ))}
    </HomeLayout>
  );
}
