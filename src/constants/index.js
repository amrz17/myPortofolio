import { x, gitHub, linkedIn } from "../assets/Icons";
import { desktop, eCommerce, feChallenge, vehicleMatching, monitoringMachines } from "../assets/Images";

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
    to: "https://www.linkedin.com/in/muhammad-amer-486b481b1",
    icon: linkedIn,
    label: "linkedin",
  },
];

export const projects = [
  {
    title: "Vehicle Plate and Image Matching",
    img: vehicleMatching,
    area: "Computer Vision",
    desc: "A system that combines license plate detection using OCR and vehicle image matching using YOLOv8 and ResNet50 to automatically verify vehicle identity using computer vision",
    imgGit: gitHub,
    linkWeb: "",
    linkGit: "",
  },
  {
    title: "Monitoring Machine Counter",
    img: monitoringMachines,
    area: "IoT and Web Development",
    desc: "A system I built during my internship at PT Kyoraku Blowmolding Indonesia. It is a machine counter monitoring system that uses limit switch sensors and digital dashboards to visualize data, track production quantities, and detect potential anomalies",
    // imgGit: gitHub,
    linkWeb: "",
    linkGit: "",
  },
  {
    title: "Profile of Sekarwangi",
    img: desktop,
    area: "Web Development",
    desc: "A Sekarwangi village profile website that displays general village information, public services, population data, and community activities in an informative and easily accessible display",
    imgGit: gitHub,
    linkWeb: "https://sekarwangikrw.vercel.app",
    linkGit: "https://github.com/amrz17/Profile-Sekarwangi-Krw",
  },
  {
    title: "Frontend Challenge",
    img: feChallenge,
    area: "Web Development",
    desc: "This is a Front-End challenge from FrontendMentor.io that I completed. The project helped me improve my skills in building responsive layouts and clean user interfaces",
    imgGit: gitHub,
    linkWeb: "https://www.frontendmentor.io/profile/amrz17/solutions",
    linkGit: "https://github.com/amrz17",
  },
  // {
  //   title: "E-commerce",
  //   img: eCommerce,
  //   area: "Web Development",
  //   desc: "An E-commerce website designed to showcase products and facilitate online transactions. This project helped me strengthen my understanding of product listing, cart management, and user-friendly UI design",
  //   imgGit: gitHub,
  //   linkWeb: "https://clothing-store-three.vercel.app",
  //   linkGit: "https://github.com/amrz17/chloting-strore",
  // },
];
