import { FC } from "react";
import styles from "./index.module.scss";
import PagesNull from "../../PagesNull/PagesNull";

const Contacts: FC = () => {
  return (
    <div className={styles.contactsWrapper} id="contacts">
      <h2 className={styles.title}>Contacts</h2>
      <PagesNull />
    </div>
  );
};

export default Contacts;
