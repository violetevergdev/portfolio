import { useParams } from "react-router-dom";
import { projects } from "../data/projects-list.ts";
import { IProject } from "../interfaces/project.ts";

const SingleProject = () => {
  const { id } = useParams<{ id: string }>();

  const project: IProject = projects[Number(id)];

  return (
    <main>
      <div className="container">
        <div className="project-details">
          <h1 className="title-1">{project.title}</h1>

          <img
            src={`..${project.bigImg}`}
            alt="Project img"
            className="project-details__cover"
          />
          {project.attribute && (
            <span>
              Photo by{" "}
              <a className="attibute" href={project.attribute}>
                Freepik
              </a>
            </span>
          )}

          <div className="project-details__desc">
            <p>Skills: {project.skills}</p>
          </div>

          {project.gitHubLink && (
            <a
              href={project.gitHubLink}
              className="btn-outline"
              target="_blank"
            >
              <img src="../src/img/icons/gitHub-black.svg" alt="Github icon" />
              GitHub repo
            </a>
          )}
        </div>
      </div>
    </main>
  );
};

export default SingleProject;
