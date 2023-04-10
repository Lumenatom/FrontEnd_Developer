import { FC } from "react";
import styles from "./index.module.scss";
import Logo from "../../assets/logo.svg";
import { AnimatePresence, motion } from "framer-motion";
import useVisibleMenu from "../../hooks/useVisibleMenu";
import { SlMenu } from "react-icons/sl";
import { IoClose } from "react-icons/io5";
import { Link } from "react-scroll";

const NavBar: FC = () => {
  const { visibleMenu, handlerVisibleMenu } = useVisibleMenu();

  return (
    <div className={styles.navBarWrapper}>
      <img className={styles.logo} src={Logo} alt="Arthur Shevtsov" />
      <div className={styles.wrapperMenu}>
        <AnimatePresence>
          {visibleMenu ? (
            <IoClose
              className={styles.closeIconMenu}
              onClick={() => handlerVisibleMenu(false)}
            />
          ) : (
            <SlMenu onClick={() => handlerVisibleMenu(true)} />
          )}
        </AnimatePresence>
        <div className={styles.menu}>
          <AnimatePresence>
            {visibleMenu && (
              <motion.nav
                initial={{ width: 0, opacity: 0 }}
                animate={{
                  width: "100vw",
                  height: "100vh",
                  opacity: 1,
                }}
                exit={{ width: 0, opacity: 0 }}
              >
                <ul onClick={() => handlerVisibleMenu(false)}>
                  <li>
                    <Link
                      to="header"
                      activeClass="active"
                      spy={true}
                      smooth={true}
                      offset={50}
                      duration={500}
                    >
                      Home
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="technologyStack"
                      activeClass="active"
                      spy={true}
                      smooth={true}
                      offset={50}
                      duration={500}
                    >
                      Technology stack
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="projects"
                      activeClass="active"
                      spy={true}
                      smooth={true}
                      offset={50}
                      duration={500}
                    >
                      Projects
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="aboutMe"
                      activeClass="active"
                      spy={true}
                      smooth={true}
                      offset={50}
                      duration={500}
                    >
                      About me
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="contacts"
                      activeClass="active"
                      spy={true}
                      smooth={true}
                      offset={50}
                      duration={500}
                    >
                      Contacts
                    </Link>
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

export default NavBar;
