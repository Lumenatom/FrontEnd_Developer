import { FC } from "react";
import styles from "./index.module.scss";
import Logo from "../../assets/logo.svg";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import useVisibleMenu from "../../hooks/useVisibleMenu";
import { SlMenu } from "react-icons/sl";
import { IoClose } from "react-icons/io5";

const Header: FC = () => {
  const { visibleMenu, handlerVisibleMenu } = useVisibleMenu();

  return (
    <div className={styles.headerWrapper}>
      <img src={Logo} alt="Arthur Shevtsov" />
      <div className={styles.menu}>
        <AnimatePresence>
          <motion.div
            initial={{ width: 0, x: 0 }}
            animate={{ width: "auto", x: "-100%" }}
            exit={{ width: 0 }}
            style={{ overflow: "hidden" }}
          >
            {visibleMenu ? (
              <motion.div whileHover={{}}>
                <IoClose
                  className={styles.closeIconMenu}
                  onClick={() => handlerVisibleMenu(false)}
                />
              </motion.div>
            ) : (
              <SlMenu onClick={() => handlerVisibleMenu(true)} />
            )}
          </motion.div>
        </AnimatePresence>

        <AnimatePresence>
          {visibleMenu && (
            <motion.nav
              initial={{ width: 0, opacity: 1 }}
              animate={{
                width: "205px",
                height: "100vh",
                opacity: 1,
              }}
              exit={{ width: 0, opacity: 1 }}
              style={{ overflow: "hidden" }}
            >
              <ul onClick={() => handlerVisibleMenu(false)}>
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
                <li>
                  <Link to={"/aboutMe"}>About me</Link>
                </li>
                <li>
                  <Link to={"/skills&technologies"}>Skills & Technologies</Link>
                </li>
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Header;
