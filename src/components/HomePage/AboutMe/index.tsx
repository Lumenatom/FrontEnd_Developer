import { FC } from "react";
import styles from "./index.module.scss";
import useVisibleMenu from "../../../hooks/useVisibleMenu";
import { motion } from "framer-motion";

const AboutMe: FC = () => {
  const { handlerVisibleMenu } = useVisibleMenu();
  const listVariants = {
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.5,
        type: "spring",
        stiffness: 100,
      },
    }),
    hidden: {
      y: "100%",
      opacity: 0,
    },
  };
  return (
    <div
      onClick={() => handlerVisibleMenu(false)}
      className={styles.aboutMeWrapper}
    >
      <div className={styles.description}>
        <motion.h6
          variants={listVariants}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          HELLO
        </motion.h6>
        <motion.h2
          variants={listVariants}
          initial="hidden"
          animate="visible"
          custom={2}
        >
          Iʼm ARTHUR
          <br /> SHEVTSOV
        </motion.h2>
        <motion.h3
          variants={listVariants}
          initial="hidden"
          animate="visible"
          custom={3}
        >
          FRONT-END DEVELOPER
        </motion.h3>
      </div>
    </div>
  );
};

export default AboutMe;
