import { FC, useState } from "react";
import styles from "./index.module.scss";
import useVisibleMenu from "../../../hooks/useVisibleMenu";
import { motion } from "framer-motion";
import CarIcon from "../../../assets/Home/car.svg";
import RoadIcon from "../../../assets/Home/road.svg";
import { useNavigate } from "react-router-dom";

const Technologies: FC = () => {
  const { handlerVisibleMenu } = useVisibleMenu();
  const navigate = useNavigate();
  const [positionCar, setPositionCar] = useState("0");
  const handleNavigate = () => {
    setPositionCar("110vw");
    setTimeout(() => {
      navigate("/contact");
    }, 1200);
  };
  return (
    <div
      onClick={() => handlerVisibleMenu(false)}
      className={styles.technologiesWrapper}
    >
      <div className={styles.imageCarAndRoad}>
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: positionCar }}
          exit={{ x: positionCar }}
          transition={{ duration: 2 }}
          className={styles.carTechnologies}
        >
          <img src={CarIcon} alt="" onClick={handleNavigate} />
        </motion.div>
        <img className={styles.road} src={RoadIcon} />
      </div>
    </div>
  );
};

export default Technologies;
