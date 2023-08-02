import Pic_1 from "../assets/Projects/Project_1/pic_1.png";
import Pic_2 from "../assets/Projects/Project_1/pic_2.png";
import Pic_3 from "../assets/Projects/Project_1/pic_3.png";
import Pic_4 from "../assets/Projects/Project_1/pic_4.png";
import Pic_5 from "../assets/Projects/Project_1/pic_5.png";
import Pic_6 from "../assets/Projects/Project_1/pic_6.png";
import Pic_7 from "../assets/Projects/Project_1/pic_7.png";
import Pic_8 from "../assets/Projects/Project_1/pic_8.png";

import Pic_9 from "../assets/Projects/Project_2/pic_9.png";
import Pic_10 from "../assets/Projects/Project_2/pic_10.png";
import Pic_11 from "../assets/Projects/Project_2/pic_11.png";
import Pic_12 from "../assets/Projects/Project_2/pic_12.png";

import Pic_13 from "../assets/Projects/Project_3/pic_13.png";
import Pic_14 from "../assets/Projects/Project_3/pic_14.png";
import Pic_15 from "../assets/Projects/Project_3/pic_15.png";
import Pic_16 from "../assets/Projects/Project_3/pic_16.png";
import Pic_17 from "../assets/Projects/Project_3/pic_17.png";
import Pic_18 from "../assets/Projects/Project_3/pic_18.png";
import Pic_19 from "../assets/Projects/Project_3/pic_19.png";
import Pic_20 from "../assets/Projects/Project_3/pic_20.png";
import Pic_21 from "../assets/Projects/Project_3/pic_21.png";
import { ProjectInfo } from "../types/types";

export const projectsData: ProjectInfo[] = [
  {
    id: "3",
    title: "Pomodoro Timer",
    description:
      "Pomodoro Timer is a handy tool for managing the hour. Set a short timer for focus, pause and long pause. Easily mingle between cycles, nail the focus and focus. Take awareness, if the skin cycle is completed, helping you to increase productivity and efficiency in work. In addition, give the opportunity to improve with those supplements, so that you can choose the best visual image.",
    technology: ["React", "TypeScript", "hooks", "Styled components", "Vite"],
    images: [
      Pic_13,
      Pic_14,
      Pic_15,
      Pic_16,
      Pic_17,
      Pic_18,
      Pic_19,
      Pic_20,
      Pic_21,
    ],
    gitHub: "https://github.com/Lumenatom/Pomodoro_Timer",
    link: "https://lumenatom.github.io/Pomodoro_Timer/",
  },
  {
    id: "2",
    title: "Minimalism To-Do List on React Native",
    description:
      "Minimalistic ToDo-list on React Native with Expo and Hooks - an effective add-on for task management on iOS and Android. Handy interface, adding, viewing, updating the list, hooks for productivity. Organize the work and do the special things manually and easily.",
    technology: ["React Native", "TypeScript", "Framer Motion", "Hooks"],
    images: [Pic_9, Pic_10, Pic_11, Pic_12],
    gitHub: "https://github.com/Lumenatom/Minimalis-ToDo_React-Native",
    link: "",
  },
  {
    id: "1",
    title: "Clone web application McDonalds",
    description:
      "This is a web application clone of McDonald's that allows users to select any item, sort them by category, and search for products. Additionally, users can choose the quantity of items and add them to their cart. The cart automatically calculates the number of items and their price, and displays the total amount. Users receive notifications when items are added or removed from the cart and when orders are placed. The app is adapted to work on PCs, tablets, and smartphones. Bon appetite!!",
    technology: [
      "React",
      "TypeScript",
      "Styled Component",
      "Framer Motion",
      "Vite",
      "Toast notifications",
    ],
    images: [Pic_1, Pic_2, Pic_3, Pic_4, Pic_5, Pic_6, Pic_7, Pic_8],
    gitHub: "https://github.com/Lumenatom/McDonalds_Application",
    link: "https://lumenatom.github.io/McDonalds_Application/",
  },
];
