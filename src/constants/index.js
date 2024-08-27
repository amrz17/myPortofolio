import { x, gitHub, linkedIn } from "../assets/Icons";
import { desktop, eCommerce, feChallenge } from "../assets/Images";

export const navLink = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

export const social = [
  { to: "https://twitter.com/aMr6443", icon: x, label: "x" },
  { to: "https://github.com/amrz17", icon: gitHub, label: "github" },
  {
    to: "https://www.linkedin.com/in/muhammad-amer-9899832b0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    icon: linkedIn,
    label: "linkedin",
  },
];

export const projects = [
  {
    title: "Profile of Sekarwangi",
    img: desktop,
    area: "Web Development",
    desc: "This is Website Profile Village Of Sekarwangi Karawang",
    imgGit: gitHub,
    linkWeb: "https://www.sekarwangikrw.com",
    linkGit: "https://github.com/amrz17/Profile-Sekarwangi-Krw",
  },
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
