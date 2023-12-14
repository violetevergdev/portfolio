import { IProject } from "../interfaces/project.ts";

export const projects: IProject[] = [
  {
    id: 1,
    title: "Just React",
    skills: "React, JavaScript",
    img: "src/img/projects/01.jpg",
    bigImg: "src/img/projects/01-big.jpg",
    gitHubLink: "https://violetevergdev.github.io/first-react-deploy/",
  },
  {
    id: 2,
    title: "Game Find-A-Couple",
    skills: "JavaScript",
    img: "src/img/projects/02.jpg",
    bigImg: "src/img/projects/02-big.jpg",
    gitHubLink: "https://github.com/violetevergdev/find-a-couple",
  },
  {
    id: 3,
    title: "To Do",
    skills: "React, useContext, JavaScript",
    img: "src/img/projects/03.jpg",
    bigImg: "src/img/projects/03-big.jpg",
    attribute:
      "https://ru.freepik.com/free-photo/flat-lay-notebook-with-to-do-list-on-desk_13696812.htm#query=to%20do&position=4&from_view=search&track=ais&uuid=07edfe41-8e7e-4139-bc0b-68d185a6b3f2",
    gitHubLink: "https://github.com/violetevergdev/todo-test",
  },
  {
    id: 4,
    title: "Portfolio website",
    skills:
      "React, React Router, TypeScript, Custom Hooks, Dark Mode, Local Storage ",
    img: "src/img/projects/04.jpg",
    bigImg: "src/img/projects/04-big.jpg",
  },
  {
    id: 5,
    title: "Post App",
    skills: "React, Redux, Redux Toolkit",
    img: "src/img/projects/05.jpg",
    bigImg: "src/img/projects/05-big.jpg",
    gitHubLink: "https://github.com/violetevergdev/redux-toolkit-test",
  },
];
