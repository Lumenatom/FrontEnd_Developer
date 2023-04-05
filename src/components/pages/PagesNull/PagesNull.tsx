import { FC } from "react";
import styles from "./PagesNull.module.scss";
import Loader from "../../Loader";

const PagesNull: FC = () => (
  <div className={styles.wrapper}>
    <span>Page under construction</span>
    <Loader />
  </div>
);

export default PagesNull;
