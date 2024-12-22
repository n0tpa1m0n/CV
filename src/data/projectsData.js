import NotionGif from "../assets/images/NotionGif.gif";
import Lamoda from "../assets/images/Lamoda.gif";
import ToDoList from "../assets/images/ToDo.gif";
import Landing from "../assets/images/Landing.gif";
const projectsData = [
  {
    title: "Notion",
    description:
      "Multi-user notes app. This simple and convenient solution allows users take notes, edit and delete them, as well as register and store your data securely.",
    image: NotionGif,
    github: "https://github.com/n0tpa1m0n/DemoNotion",
    techStack: [
      "React",
      "Redux",
      "Thunk",
      "json-server",
      "JavaScript",
      "TailwindCSS",
    ],
  },
  {
    title: "Lamoda",
    description:
      "This is a popular online store that offers users the ability to conveniently filter and sort products.",
    image: Lamoda,
    github: "https://github.com/n0tpa1m0n/Lamoda",
    techStack: ["React", "JavaScript", "chancejs", "scss"],
  },
  {
    title: "ToDoList",
    description:
      "It is a multitasking app that allows users to manage their tasks with a user-friendly interface and powerful filtering features.",
    image: ToDoList,
    github: "https://github.com/n0tpa1m0n/ToDoList",
    techStack: ["React", "JavaScript", "chancejs"],
  },
  {
    title: "Landing",
    description:
      "This project is a web page for placing an order for macarons. With validation and assembly automation.",
    image: Landing,
    github: "https://github.com/n0tpa1m0n/Landing_macarons",
    techStack: ["JavaScript(jQuery)", "Grunt", "LESS"],
  },
];

export default projectsData;
