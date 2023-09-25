import {
  FaHtml5,
  FaCss3,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaLinkedin, FaTwitter, FaInstagram
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiMongodb,
  SiTailwindcss,
  SiMui,
  SiExpress,
} from "react-icons/si";
import { MdDeck, MdQuiz, MdShoppingCart, MdMenuBook } from "react-icons/md";

export const profileBasicInfo = {
  name: "Tarun Lal Rajak",
  designation: "Software Engineer (Frontend)",
  profile_description:
    "I have 1.5 year-experience as software developer skilled in ReactJS, TypeScript, NextJS, Redux, and GraphQL. My work includes developing responsive web apps, optimizing load times, and using TypeScript for error prevention. Crafting visually appealing UIs with Vanilla CSS and Tailwind CSS is a strong suit. I have practical experience with GraphQL, effectively tailoring queries to frontend needs which can enhance frontend functionality. Collaborative work with backend teams and continuous learning, including advanced React Hooks and GraphQL subscriptions courses, are among my strengths. I'm enthusiastic about contributing my adaptable skills to the SDE1 Frontend position, always dedicated to quality results.",
};

export const companyDetails = {
  company_name: "Geekyants",
  designation: "Software Engineer I",
  duration: "June 2022 - Present",
  skills: [
    "Javascript",
    "ReactJs",
    "Typescript",
    "NextJs",
    "Tailwind",
    "HTML",
    "CSS",
    "Git",
    "Jira",
    "Agile Methodology",
  ],
};

export const techList = [
  {
    id: 1,
    child: (
      <>
        <FaHtml5 className="w-20 h-20 mx-auto " />
      </>
    ),
    title: "HTML",
  },
  {
    id: 2,
    child: (
      <>
        <FaCss3 className="w-20 h-20 mx-auto " />
      </>
    ),
    title: "CSS",
  },
  {
    id: 3,
    child: (
      <>
        <FaJsSquare className="w-20 h-20 mx-auto " />
      </>
    ),
    title: "JavaScript",
  },
  {
    id: 4,
    child: (
      <>
        <FaReact className="w-20 h-20 mx-auto " />
      </>
    ),
    title: "ReactJs",
  },
  {
    id: 5,
    child: (
      <>
        <SiNextdotjs className="w-20 h-20 mx-auto " />
      </>
    ),
    title: "NextJs",
  },
  {
    id: 6,
    child: (
      <>
        <SiTypescript className="w-20 h-20 mx-auto " />
      </>
    ),
    title: "TypeScript",
  },
  {
    id: 7,
    child: (
      <>
        <FaNodeJs className="w-20 h-20 mx-auto " />
      </>
    ),
    title: "Node",
  },
  {
    id: 8,
    child: (
      <>
        <SiExpress className="w-20 h-20 mx-auto " />
      </>
    ),
    title: "ExpressJs",
  },
  {
    id: 9,
    child: (
      <>
        <SiMongodb className="w-20 h-20 mx-auto " />
      </>
    ),
    title: "MongoDB",
  },
  {
    id: 10,
    child: (
      <>
        <SiTailwindcss className="w-20 h-20 mx-auto " />
      </>
    ),
    title: "Tailwind CSS",
  },
  {
    id: 11,
    child: (
      <>
        <SiMui className="w-20 h-20 mx-auto " />
      </>
    ),
    title: "Material UI",
  },
  {
    id: 12,
    child: (
      <>
        <FaGithub className="w-20 h-20 mx-auto " />
      </>
    ),
    title: "GitHub",
  },
];

export const projects = [
  {
    child: (
      <>
        <MdDeck className="w-20 h-20 mx-auto " />
      </>
    ),
    title: "Video Library",
    description:
      "A youtube inspired Learning app , Core Features includes search video,filter by category, playlist management, like and dislike feature.",
    liveLink: "http://green-play.netlify.app",
    codeLink: "https://github.com/tarun00710/Video-lib-greenshow",
  },
  {
    child: (
      <>
        <MdQuiz className="w-20 h-20 mx-auto " />
      </>
    ),
    title: "Quiz App",
    description:
      "A fun quiz app made in MERN Stack, Auth implementation with local storage using token and multiple topics to choose, feedback for right/wrong using green/red color, score update based on answer given and dashboard to show all scores",
    liveLink: "https://quizshots.netlify.app",
    codeLink: "https://github.com/tarun00710/myquiztime",
  },
  {
    child: (
      <>
        <MdShoppingCart className="w-20 h-20 mx-auto " />
      </>
    ),
    title: "Ecommerce",
    description:
      "An E-Commerce Platform made in MERN Stack. Uses Redux Toolkit for State management, Core features includes cart management, Wishlist management, checkout page",
    liveLink: "https://shop-look.netlify.app/",
    codeLink: "https://github.com/tarun00710/Shop_Ecomm",
  },
  {
    child: (
      <>
        <MdMenuBook className="w-20 h-20 mx-auto " />
      </>
    ),
    title: "Component Library",
    description:
      "A Book App made in ReactJs as the frontend and NodeJs with Express as the backend and MongoDB as the database. It uses OAuth for the user authentication via Google for direct login using PassportJs as the Middleware ",
    liveLink: "https://style-component.netlify.app/",
    codeLink: "https://github.com/tarun00710/component-library",
  },
  //   {
  //     child: (
  //       <>
  //         <MdFoodBank className="w-20 h-20 mx-auto " />
  //       </>
  //     ),
  //     title: "Meals",
  //     description:
  //       "An app for ordering food by giving address on checkout, Frontend made using ReactJs, Firebase is used as Backend. ",
  //     liveLink: "",
  //     codeLink: "",
  //   },
];

export const socials = [
  {
    id: 1,
    child: (
      <>
        <FaLinkedin size={30} />
      </>
    ),
    href: "https://www.linkedin.com/in/tarunlalrajak/",
  },
  {
    id: 2,
    child: (
      <>
        <FaGithub size={30} />
      </>
    ),
    href: "https://github.com/tarun00710",
  },
  {
    id: 3,
    child: (
      <>
        <FaTwitter size={30} />
      </>
    ),
    href: "https://twitter.com/tkphenom",
  },
  {
    id: 4,
    child: (
      <>
        <FaInstagram size={30} />
      </>
    ),
    href: "https://www.instagram.com/tarun_7.0/",
  },
];

export const links = [
  {
    id: 1,
    link: "Home",
  },
  {
    id: 2,
    link: "Technologies",
  },
  {
    id: 3,
    link: "Projects",
  },
  {
    id: 4,
    link: "Experience",
  },
  {
    id: 5,
    link: "Contacts",
  },
];
