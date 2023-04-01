import React, { FC, useEffect } from "react";
import styles from "./App.module.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import Header from "./components/Header";

const App: FC = () => {
  useEffect(() => {
    alert("Artur Shevtsov is currently working on this project :)");
  }, []);

  return (
    <div className={styles.App}>
      <div className={styles.container}>
        <BrowserRouter basename={"/FrontEnd_Developer/"}>
          <Header />
          <Routes>
            <Route path={"/"} element={<HomePage />} />
            <Route path={"/contact"} element={<div>contact</div>} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
