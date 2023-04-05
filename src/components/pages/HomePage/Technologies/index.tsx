import { FC } from "react";
import styles from "./index.module.scss";
import {
  favoriteTechnologies,
  otherTechnologies,
  stylesTechnologies,
  supportTechnologies,
} from "./dataTechnologies";

const Technologies: FC = () => {
  return (
    <div className={styles.technologiesWrapper}>
      <div className={styles.favoriteTechnologies}>
        {favoriteTechnologies.map((el) => (
          <div>
            <img src={el.img} alt={el.name} />
            <h2>{el.name}</h2>
          </div>
        ))}
      </div>
      <div className={styles.stylesTechnologies}>
        {stylesTechnologies.map((el) => (
          <div>
            <img src={el.img} alt={el.name} />
            <h2>{el.name}</h2>
          </div>
        ))}
      </div>
      <div className={styles.supportTechnologies}>
        {supportTechnologies.map((el) => (
          <div>
            <img src={el.img} alt={el.name} />
            <h2>{el.name}</h2>
          </div>
        ))}
      </div>
      <div className={styles.otherTechnologies}>
        {otherTechnologies.map((el) => (
          <div>
            <img src={el.img} alt={el.name} />
            <h2>{el.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
