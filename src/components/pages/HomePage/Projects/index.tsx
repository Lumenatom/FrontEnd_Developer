import React, { FC } from "react";
import styles from "./index.module.scss";
import Slider from "../../../Slider/Slider";

const Projects: FC = () => {
  return (
    <div className={styles.projectsWrapper} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.project}>
        <Slider />
        <div className={styles.desc}>sfsdf</div>
      </div>
    </div>
  );
};

export default Projects;
