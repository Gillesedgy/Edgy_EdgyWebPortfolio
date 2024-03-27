import backend from "../images/coreSkills/backendC.png";
import frontend from "../images/coreSkills/frontend.png";
import webApp from "../images/coreSkills/webAppC.png";
import API_Dev from "../images/coreSkills/APIDev.png";
import deployment from "../images/coreSkills/deployment.png";
import versionControl from "../images/coreSkills/version-control.png";
// icons and mana  cost
import { SiFrontendmentor } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { FaPhoenixFramework } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaPiedPiperAlt } from "react-icons/fa";
import { PiFileHtmlDuotone } from "react-icons/pi";
import { PiFileCssDuotone } from "react-icons/pi";
import { SiBackendless } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiExpress } from "react-icons/si";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { AiOutlineApi } from "react-icons/ai";
import { AiOutlineDeploymentUnit } from "react-icons/ai";
import { SiAzureartifacts } from "react-icons/si";
import { BiGitMerge } from "react-icons/bi";
import { GiGlowingArtifact } from "react-icons/gi";

//
export function coreSkillsData() {
  return [
    {
      title: "Frontend Development",
      name: "Zephyrion",
      image: frontend,
      description:
        "Proficient in HTML, CSS, and JavaScript, The UI Artificer is the master of user experiences in the digital realm. With a magical touch, they craft captivating visuals and intuitive interfaces that bring software and websites to life.",
      icon: <SiFrontendmentor />,
      stack: [
        {
          name: "HTML5",
          icon: <PiFileHtmlDuotone />,
        },
        {
          name: "CSS",
          icon: <PiFileCssDuotone />,
        },
        {
          name: "ReactJs",
          icon: <SiReact />,
        },
        {
          name: "UIFramework",
          icon: <FaPhoenixFramework />,
        },
      ],
      quote:
        "I breathe life into the digital canvas, crafting enchanting experiences for all who venture into the pixelated realms.",
      level: "3/3",
      cardNumber: "12/250",
    },

    {
      title: "Backend Development",
      name: "Cipherex",
      image: backend,
      description:
        "I architect databases, develop APIs, and construct the backbone that supports seamless user interactions.",
      icon: <SiBackendless />,
      stack: [
        {
          name: "NodeJs",
          icon: <FaNodeJs />,
        },
        {
          name: "Postgresql",
          icon: <BiLogoPostgresql />,
        },
        {
          name: "ExpressJs",
          icon: <SiExpress />,
        },
      ],
      quote:
        "The code is my canvas, and data is my paint. Together, we craft digital wonders.",
      cardNumber: "34/250",
      level: "2/2",
    },
    {
      title: "Web Applications",
      name: "Aetherweb",
      image: webApp,
      description:
        "By combining frontend and backend technologies, I create platforms that solve problems, streamline processes, and provide users with intuitive interfaces to navigate through a digital wonderland.",
      icon: <AiOutlineAppstoreAdd />,
      stack: [
        {
          name: "HTML5",
          icon: <PiFileHtmlDuotone />,
        },
        {
          name: "CSS",
          icon: <PiFileCssDuotone />,
        },
        {
          name: "ReactJs",
          icon: <SiReact />,
        },
        {
          name: "UIFramework",
          icon: <FaPhoenixFramework />,
        },
        {
          name: "NodeJs",
          icon: <FaNodeJs />,
        },
        {
          name: "Postgresql",
          icon: <BiLogoPostgresql />,
        },
        {
          name: "ExpressJs",
          icon: <SiExpress />,
        },
      ],

      quote:
        "I'm a gateway to an ever-expanding digital realm. Shuffle through my features, and let's play the game of connectivity together.",
      level: "3/4",
      cardNumber: "76/250",
    },
    {
      title: "Instant API Development",
      name: "Arcanex",
      image: API_Dev,
      description:
        "Gives the card user access to a portal to the digital realm, where data dances and information flows freely. This card bridges the gap between different software applications, allowing them to communicate and share their secrets.",
      icon: <AiOutlineApi />,
      stack: [],
      quote:
        "As the connector of worlds, I am the key to unlocking the mysteries of the digital realm. With me in your hand, your applications will harmonize, sharing their tales and creating a symphony of data.",
      level: <FaPiedPiperAlt />,
      cardNumber: "87/250",
    },
    {
      title: "Deployment & Hosting",
      name: "Artifact Deployer",
      image: deployment,
      description:
        "By managing hosting, optimizing performance, and handling domain configurations, I'm the guide that leads your masterpiece to shine on the world wide web.",
      icon: <AiOutlineDeploymentUnit />,
      stack: [],
      quote:
        "I am the guardian of the gateway, the gatekeeper of digital realms. With my precision and unwavering commitment, I ensure that the game world evolves seamlessly, maintaining its balance and harmony.",
      level: <SiAzureartifacts />,
      cardNumber: "22/250",
    },
    {
      title: "Version Control/Git",
      name: "Scriptweaver ",
      image: versionControl,
      description:
        " The user possesses an enigmatic demeanor, with a deep connection to the creatures of code. He is a silent observer, using his uncanny abilities to maintain order and harmony in the digital realm. ",
      icon: <BiGitMerge />,
      stack: [],
      quote:
        "I'm well-versed in using Git for collaborative coding, ensuring that changes are tracked, issues are managed, and codebase history is maintained.",
      level: <GiGlowingArtifact />,
      cardNumber: "51/250",
    },
  ];
}
