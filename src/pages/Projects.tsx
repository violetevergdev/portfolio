import Project from "../components/Project/Project.tsx";
import { projects } from "../data/projects-list.ts";

const Projects = () => {
  return (
    <main className="section">
      <div className="container">
        <h2 className="title-1">Projects</h2>

        <ul className="projects">
          {projects?.map((project, index) => (
            <Project
              title={project.title}
              img={project.img}
              key={project.id}
              index={index}
            />
          ))}
        </ul>
      </div>
    </main>
  );
};

export default Projects;
