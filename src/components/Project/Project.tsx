import { NavLink } from "react-router-dom";

const Project = ({
  title,
  img,
  index,
}: {
  title: string;
  img: string;
  index: number;
}) => {
  return (
    <NavLink to={`/single-project/${index}`}>
      <li className="project">
        <img src={img} alt="Project image" className="project__img" />
        <h3 className="project__title">{title}</h3>
      </li>
    </NavLink>
  );
};

export default Project;
