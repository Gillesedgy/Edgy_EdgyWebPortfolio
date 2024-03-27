import scroll from "../images/softSkills/scroll.png";
import empathy from "../images/softSkills/empathy.png";
import collaboration from "../images/softSkills/collaboration.png";
import problemSolving from "../images/softSkills/problemSolving.png";
import adaptability from "../images/softSkills/adaptability.png";
import time from "../images/softSkills/time.png";
// icons and mana cost
import { AiOutlineSolution } from "react-icons/ai";
import { GiSwordWound } from "react-icons/gi";
import { GiTeamIdea } from "react-icons/gi";
import { GiExtraTime } from "react-icons/gi";
import { GiSatelliteCommunication } from "react-icons/gi";
import { GiMultipleTargets } from "react-icons/gi";
import { GiTransform } from "react-icons/gi";
import { GiTimeDynamite } from "react-icons/gi";
import { GiJoin } from "react-icons/gi";
import { GiPeaceDove } from "react-icons/gi";
import { TbTransform } from "react-icons/tb";
import { RiEmpathizeFill } from "react-icons/ri";
import { RiKakaoTalkFill } from "react-icons/ri";
import { MdSyncProblem } from "react-icons/md";

export function softSkillsData() {
  return [
    {
      title: "Communication",
      name: "The Enchanter's Crystal Scroll ",
      image: scroll,
      description:
        "The Enchanter's Crystal Scroll card is the embodiment of effective communication and connection. Much like a magician's spellbook, this card allows characters to bridge gaps, convey intentions, and foster understanding in the game world.",
      icon: <GiSatelliteCommunication />,
      stack: [
        { name: "Community", icon: <RiKakaoTalkFill /> },
        { name: "Join", icon: <GiJoin /> },
      ],

      quote:
        "   In the realm of communication, I am the Ace of the deck, the harbinger of words and emotions. With me on your team, you hold the power to bridge worlds and forge connections that shape destinies.  ",
      level: "4/5",
      cardNumber: "69/250",
    },
    {
      title: "Enchant Spell: Soulbond",
      name: "Empathy",
      image: empathy,
      description:
        " A compassionate and understanding character who always seeks to help others. They are patient and non-judgmental, making them a reliable source of support and guidance for other characters in the game. ",
      icon: <GiSwordWound />,
      stack: [
        {
          name: "Empathize",
          icon: <RiEmpathizeFill />,
        },
      ],
      quote:
        "Putting myself in the user's shoes drives me to create user-centric solutions that resonate with the intended audience.",
      level: <GiPeaceDove />,
      cardNumber: "65/250",
    },
    {
      title: "Collaboration",
      name: "The Collective Conquest",
      image: collaboration,
      description:
        " It allows characters to weave their words into strong coding spells, ensuring that messages are understood with clarity and impact.",
      icon: <GiTeamIdea />,
      stack: [],
      quote:
        "With me on the playing field, your messages will captivate, resonate, and leave a lasting impact on the game world.",
      level: "5/4",
      cardNumber: "1/10",
    },
    {
      title: "Problem solving",
      name: "Solver's Enigma",
      image: problemSolving,
      description:
        "Embodies the art of unraveling mysteries and conquering challenges. Much like a magician conjures tricks, this card conjures ingenious solutions, turning complex problems into manageable quests.",
      icon: <GiMultipleTargets />,
      stack: [
        { name: "problem", icon: <MdSyncProblem /> },
        { name: "Solution", icon: <AiOutlineSolution /> },
      ],
      quote:
        "I am the Solver's Enigma, the keeper of puzzles and the weaver of solutions. With me in your hand, no challenge is too perplexing, and no problem is insurmountable.",
      level: "3/4",
      cardNumber: "38/250",
    },
    {
      title: "Artifact: Adaptability",
      name: "The Chameleon",
      image: adaptability,
      description:
        "The Chameleon's Resilience card embodies the art of flexible and seamless adaptation. Much like a chameleon changes its colors to thrive in different environments, this card allows characters to navigate the ever-changing landscapes of the game world with ease.",

      icon: <GiTransform />,
      stack: [],
      quote:
        "Change is my ally. I pivot seamlessly to accommodate shifting requirements.",
      level: <TbTransform />,
      cardNumber: "30/50",
    },

    {
      title: "Artifact: Time Management",
      name: "Maestro's Chronograph",
      image: time,
      description:
        "The Temporal Maestro's Chronograph card embodies the art of controlling and optimizing time. Much like a magician's command over magic spells, I orchestrate the flow of time, ensuring that every moment is utilized to its fullest potential.",
      icon: <GiExtraTime />,
      stack: [],
      quote:
        "I orchestrate the symphony of time in the game world, making every second count.",
      level: <GiTimeDynamite />,
      cardNumber: "79/100",
    },
  ];
}
