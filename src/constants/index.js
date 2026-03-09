import { x, gitHub, linkedIn } from "../assets/Icons";
import { desktop, eCommerce, feChallenge, vehicleMatching, monitoringMachines, monitoringStockBox, digitalScale, gotTalent } from "../assets/Images";

export const navLink = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "https://amer-v2.vercel.app/blog", label: "Blog" },
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
    // imgGit: gitHub,
    linkWeb: "https://drive.google.com/file/d/1NJeLy9o2MlCs3COPOrwS0oExxyRvm-qA/view?usp=sharing",
    linkGit: "",
  },
  {
    title: "Monitoring Machine Counter",
    img: monitoringMachines,
    area: "IoT and Web Development",
    desc: "A system I built during my internship at PT Kyoraku Blowmolding Indonesia. It is a machine counter monitoring system that uses limit switch sensors and digital dashboards to visualize data, track production quantities, and detect potential anomalies",
    // imgGit: gitHub,
    linkWeb: "https://drive.google.com/drive/folders/1MWYAtzsB-4-W2J3eKXg8djsmpSN5cGZ8?usp=sharing",
    linkGit: "",
  },
  {
    title: "Digital Scale Reading & Weight Classification System",
    img: digitalScale,
    area: "Computer Vision and Web Development",
    desc: "Developed a computer vision system to classify product weight based on digital scale data and label products as OK or NG for automated quality control evaluation.",
    imgGit: gitHub,
    linkWeb: "https://drive.google.com/file/d/1jNv_XwqCZzOdDWbCVqHHCCXF-H3l1n1g/view?usp=sharing",
    linkGit: "https://github.com/amrz17/digital_weight_detection_scale",
  },
  {
    title: "Monitoring Stock Box",
    img: monitoringStockBox,
    area: "IoT and Web Development",
    desc: "Developed an IoT-based system for stock box monitoring using RFID, integrated with a web-based platform for automatic identification and real-time stock tracking, reducing manual inventory checks and minimizing stock discrepancies",
    // imgGit: gitHub,
    linkWeb: "https://drive.google.com/drive/folders/10ZaQKxWpSKp1Buvz7O2n89Ya6TLpRzEF?usp=drive_link",
    linkGit: "",
  },
  {
    title: "@Got Talent",
    img: gotTalent,
    area: "Web Development",
    desc: "This project is a web-based expert system designed to provide career interest guidance based on the RIASEC model, which categorizes careers into six types: Realistic, Investigative, Artistic, Social, Enterprising, and Conventional. The system allows users to input their preferences and interests, and then generates personalized career recommendations aligned with the RIASEC model.",
    // imgGit: gitHub,
    linkWeb: "https://drive.google.com/drive/folders/1JiYjvP3Y0Kyk-NkZir7u6WV7RNzM9CTy?usp=sharing",
    linkGit: "https://github.com/amrz17/Got_Talent",
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
    // imgGit: gitHub,
    linkWeb: "https://www.frontendmentor.io/profile/amrz17",
    // linkGit: "https://github.com/amrz17",
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
