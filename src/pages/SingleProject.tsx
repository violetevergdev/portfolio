import { useParams } from "react-router-dom";
import { projects } from "../data/projects-list.ts";
import { IProject } from "../interfaces/project.ts";

const SingleProject = () => {
  const { id } = useParams();
  // @ts-ignore
  const project: IProject = projects[id];

  return (
    <main>
      <div className="container">
        <div className="project-details">
          <h1 className="title-1">{project.title}</h1>

          <img src={project.bigImg} alt="" className="project-details__cover" />
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
              <img src="/src/img/icons/gitHub-black.svg" alt="" />
              GitHub repo
            </a>
          )}
        </div>
      </div>
    </main>
  );
};

export default SingleProject;
