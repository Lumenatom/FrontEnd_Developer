import AboutMe from "./AboutMe";
import React, { FC } from "react";
import Technologies from "./Technologies";
import Projects from "./Projects";

const HomePage: FC = () => {
  return (
    <>
      <AboutMe />
      <Technologies />
      <Projects />
    </>
  );
};

export default HomePage;
