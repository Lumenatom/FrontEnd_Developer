import { FC } from "react";
import styles from "./index.module.scss";
import PagesNull from "../../PagesNull/PagesNull";

const Projects: FC = () => {
  return (
    <div className={styles.projectsWrapper} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <PagesNull />
    </div>
  );
};

export default Projects;
