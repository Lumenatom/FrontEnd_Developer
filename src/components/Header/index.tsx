import { FC } from "react";
import styles from "./index.module.scss";
import Logo from "../../assets/logo.svg";
import { AnimatePresence, motion } from "framer-motion";
import { NavLink, useLocation } from "react-router-dom";
import useVisibleMenu from "../../hooks/useVisibleMenu";
import { SlMenu } from "react-icons/sl";
import { IoClose } from "react-icons/io5";

const Header: FC = () => {
  const { visibleMenu, handlerVisibleMenu } = useVisibleMenu();
  let { pathname } = useLocation();

  console.log(pathname);

  return (
    <div className={styles.headerWrapper}>
      <img src={Logo} alt="Arthur Shevtsov" />
      <div className={styles.wrapperMenu}>
        <AnimatePresence>
          <motion.span
            initial={{ width: 0 }}
            animate={{ width: "auto" }}
            exit={{ width: 0 }}
            style={{ overflow: "hidden" }}
          >
            {visibleMenu ? (
              <IoClose
                className={styles.closeIconMenu}
                onClick={() => handlerVisibleMenu(false)}
              />
            ) : (
              <SlMenu onClick={() => handlerVisibleMenu(true)} />
            )}
          </motion.span>
        </AnimatePresence>
        <div className={styles.menu}>
          <AnimatePresence>
            {visibleMenu && (
              <motion.nav
                initial={{ width: 0, opacity: 1 }}
                animate={{
                  width: "280px",
                  height: "100vh",
                  opacity: 1,
                }}
                exit={{ width: 0, opacity: 1 }}
              >
                <ul onClick={() => handlerVisibleMenu(false)}>
                  <li>
                    <NavLink to={"/"}>Home</NavLink>
                  </li>

                  <li>
                    <NavLink to={"/skills&technologies"}>
                      Skills & Technologies
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={"/projects"}>Projects</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/aboutMe"}>About me</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/contacts"}>Contacts</NavLink>
                  </li>
                </ul>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Header;
