import React, { FC } from "react";
import styles from "./index.module.scss";
import Slider from "../../../Slider/Slider";
import { projectsData } from "../../../../data/projectsData";
import { AiFillGithub, VscPreview } from "react-icons/all";

const Projects: FC = () => {
  return (
    <div className={styles.projectsWrapper} id="projects">
      <h2 className={styles.title}>Projects</h2>
      {projectsData.map((el) => (
        <div className={styles.project} key={el.id}>
          <Slider data={el.images} />
          <div className={styles.InfoProject}>
            <div className={styles.mainInfo}>
              <h2>{el.title}</h2>
              <p>{el.description}</p>
              <span>
                {el.technology.map((el) => (
                  <p>{el}</p>
                ))}
              </span>
            </div>
            <div className={styles.buttons}>
              <a target="_blank" href={el.link}>
                <VscPreview />
                View project
              </a>
              <a target="_blank" href={el.gitHub}>
                <AiFillGithub />
                GitHub
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
