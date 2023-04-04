import { FC } from "react";
import styles from "./index.module.scss";
import useVisibleMenu from "../../../hooks/useVisibleMenu";
import TransitionImage from "../../../assets/Home/transition.svg";

const AboutMe: FC = () => {
  const { handlerVisibleMenu } = useVisibleMenu();

  return (
    <div
      onClick={() => handlerVisibleMenu(false)}
      className={styles.aboutMeWrapper}
    >
      <div className={styles.description}>
        <h6>HELLO</h6>
        <h2>
          Iʼm ARTHUR
          <br /> SHEVTSOV
        </h2>
        <h3>FRONT-END DEVELOPER</h3>
      </div>
      <img className={styles.transitionImage} src={TransitionImage} alt="" />
    </div>
  );
};

export default AboutMe;
