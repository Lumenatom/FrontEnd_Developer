import React, { FC } from "react";
import NavBar from "../../NavBar";
import Technologies from "./Technologies";
import Projects from "./Projects";
import Experience from "./AboutMe";
import Contacts from "./Contacts";
import Header from "./Header";

const HomePage: FC = () => {
  return (
    <>
      <Header />
      <Technologies />
      <Projects />
      <Experience />
      <Contacts />
    </>
  );
};

export default HomePage;
