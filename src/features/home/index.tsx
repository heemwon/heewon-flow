import Intro from "./components/intro";
import HomeLayout from "./components/layout";
import ProjectInfo from "./components/project-info";
import ProjectPreview from "./components/project-preview";
import { PROJECT_LIST } from "./constants/projects";
import { homeBaseClass, homeProjectsClass } from "./home.styles";

export default function Home() {
  return (
    <HomeLayout>
      <Intro />

      <section
        id="projects"
        aria-labelledby="projectsTitle"
        className={homeProjectsClass}
      >
        <h2 id="projectsTitle" className="sr-only">
          주요 프로젝트
        </h2>
        {PROJECT_LIST.map((project, index) => (
          <article key={project.title} className={homeBaseClass}>
            <ProjectPreview
              index={index}
              project={project.preview}
              href={project.button.href}
            />
            <ProjectInfo project={project} />
          </article>
        ))}
      </section>
    </HomeLayout>
  );
}
