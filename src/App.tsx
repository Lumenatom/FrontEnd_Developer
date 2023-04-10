import React, { FC } from "react";
import styles from "./App.module.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import NavBar from "./components/NavBar";

const App: FC = () => {
  // useEffect(() => {
  //   alert("Artur Shevtsov is currently working on this project :)");
  // }, []);
  return (
    <div className={styles.App}>
      <BrowserRouter basename={"/FrontEnd_Developer/"}>
        <NavBar />
        <div className={styles.container}>
          <Routes>
            <Route path={"/"} element={<HomePage />} />
            {/*<Route path={"/technologyStack"} element={<PagesNull />} />*/}
            {/*<Route path={"/projects"} element={<PagesNull />} />*/}
            {/*<Route path={"/aboutMe"} element={<PagesNull />} />*/}
            {/*<Route path={"/contacts"} element={<PagesNull />} />*/}
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
