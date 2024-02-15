import { x, gitHub, linkedIn } from "../assets/Icons";
import { eCommerce, feChallenge } from "../assets/Images";

export const navLink = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

export const social = [
  { to: "https://twitter.com/aMr6443", icon: x, label: "x" },
  { to: "https://github.com/amrz17", icon: gitHub, label: "github" },
  { to: "/", icon: linkedIn, label: "linkedin" },
];

export const projects = [
  {
    title: "Frontend Challenge",
    img: feChallenge,
    area: "Web Development",
    desc: "This is chellenge Front End from frontenmentor.io who i solved",
    imgGit: gitHub,
    linkWeb: "https://www.frontendmentor.io/profile/amrz17/solutions",
    linkGit: "https://github.com/amrz17",
  },

  {
    title: "E-commerce",
    img: eCommerce,
    area: "Web Development",
    desc: "This is chellenge Front End from frontenmentor.io who i solved",
    imgGit: gitHub,
    linkWeb: "",
    linkGit: "https://github.com/amrz17/chloting-strore",
  },
];
