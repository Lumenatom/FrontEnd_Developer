import React, { FC } from "react";
import NavBar from "../../NavBar";
import Technologies from "./Technologies";
import Projects from "./Projects";
import Experience from "./AboutMe";
import Contacts from "./Contacts";
import styles from "./index.module.scss";
import Header from "./Header";

const HomePage: FC = () => {
  return (
    <div className={styles.homePageWrapper}>
      <NavBar />
      <Header />
      <Technologies />
      <Projects />
      <Experience />
      <Contacts />
    </div>
  );
};

export default HomePage;
