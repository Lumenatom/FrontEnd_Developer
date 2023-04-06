import { FC } from "react";
import styles from "./index.module.scss";
import PagesNull from "../../PagesNull/PagesNull";

const AboutMe: FC = () => {
  return (
    <div className={styles.aboutMeWrapper} id="aboutMe">
      <h2 className={styles.title}>Experience</h2>
      <PagesNull />
    </div>
  );
};

export default AboutMe;
