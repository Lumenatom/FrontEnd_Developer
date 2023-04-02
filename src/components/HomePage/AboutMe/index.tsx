import { FC } from "react";
import styles from "./index.module.scss";
import useVisibleMenu from "../../../hooks/useVisibleMenu";
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
      <div className={styles.image}>
        <h6>HELLO</h6>
        <h2>
          Iʼm ARTHUR
          <br /> SHEVTSOV
        </h2>
        <h3>FrontEnd Developer</h3>
      </div>
    </div>
  );
};

export default AboutMe;
