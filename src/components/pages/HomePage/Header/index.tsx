import { FC } from "react";
import styles from "./index.module.scss";
import { motion } from "framer-motion";
import { GoMarkGithub } from "react-icons/go";
import { BsTelegram } from "react-icons/bs";
import { ImLinkedin } from "react-icons/im";
import { GrMail } from "react-icons/gr";

const Header: FC = () => {
  const listVariants = {
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.5,
        type: "spring",
        stiffness: 40,
      },
    }),
    hidden: {
      y: "100%",
      opacity: 0,
    },
  };

  return (
    <div className={styles.headerWrapper} id="header">
      <motion.div
        className={styles.links}
        initial={{ x: "-1000%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <a href="#">
          <ImLinkedin />
        </a>
        <a href="#">
          <BsTelegram />
        </a>
        <a href="#">
          <GrMail />
        </a>
        <a href="#">
          <GoMarkGithub />
        </a>
        <hr />
      </motion.div>
      <div className={styles.description}>
        <motion.h6
          variants={listVariants}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          HELLO
        </motion.h6>
        <motion.h2
          variants={listVariants}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          Iʼm ARTHUR
          <br /> SHEVTSOV
        </motion.h2>
        <motion.h3
          variants={listVariants}
          initial="hidden"
          animate="visible"
          custom={2}
        >
          FRONT-END DEVELOPER
        </motion.h3>
      </div>
      <motion.div
        variants={listVariants}
        initial="hidden"
        animate="visible"
        custom={3}
        className={styles.buttons}
      >
        <button className={styles.buttonCv}>
          <a download="FrontEnd Shevtsov.pdf" href="resume.pdf">
            View CV
          </a>
        </button>
        <button className={styles.buttonContact}>
          <a href="mailto:Lumenatom@gmail.com">Contact me</a>
        </button>
      </motion.div>
    </div>
  );
};

export default Header;
