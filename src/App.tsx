import React, { FC, useEffect } from "react";
import styles from "./App.module.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import Header from "./components/Header";
import Loader from "./components/Loader";
import PagesNull from "./components/PagesNull/PagesNull";

const App: FC = () => {
  // useEffect(() => {
  //   alert("Artur Shevtsov is currently working on this project :)");
  // }, []);

  return (
    <div className={styles.App}>
      <BrowserRouter basename={"/FrontEnd_Developer/"}>
        <Header />
        <div className={styles.container}>
          <Routes>
            <Route path={"/"} element={<HomePage />} />
            <Route path={"/skills&technologies"} element={<PagesNull />} />
            <Route path={"/projects"} element={<PagesNull />} />
            <Route path={"/aboutMe"} element={<PagesNull />} />
            <Route path={"/contacts"} element={<PagesNull />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
