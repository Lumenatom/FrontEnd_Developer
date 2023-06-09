import { FC } from "react";
import styles from "./index.module.scss";
import {
  favoriteTechnologies,
  stylesTechnologies,
  supportTechnologies,
} from "./dataTechnologies";
import { motion } from "framer-motion";

const Technologies: FC = () => {
  const listVariants = {
    hidden: {
      y: "100%",
      opacity: 0,
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        type: "spring",
        stiffness: 70,
      },
    }),
  };

  return (
    <div className={styles.technologiesWrapper} id="technologyStack">
      <h2 className={styles.title}>Technology</h2>
      <div className={styles.favoriteTechnologies}>
        {favoriteTechnologies.map((el, i) => (
          <motion.div
            className={styles.item}
            whileInView="visible"
            variants={listVariants}
            initial="hidden"
            viewport={{ once: true }}
            custom={i}
          >
            <img src={el.img} alt={el.name} />
            <h2>{el.name}</h2>
          </motion.div>
        ))}
      </div>
      <div className={styles.stylesTechnologies}>
        {stylesTechnologies.map((el, i) => (
          <motion.div
            className={styles.item}
            variants={listVariants}
            whileInView="visible"
            viewport={{ once: true }}
            initial="hidden"
            custom={i}
          >
            <img src={el.img} alt={el.name} />
            <h2>{el.name}</h2>
          </motion.div>
        ))}
      </div>
      <motion.div className={styles.supportTechnologies}>
        {supportTechnologies.map((el, i) => (
          <motion.div
            className={styles.item}
            variants={listVariants}
            whileInView="visible"
            initial="hidden"
            viewport={{ once: true }}
            custom={i}
          >
            <img src={el.img} alt={el.name} />
            <h2>{el.name}</h2>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Technologies;
