import { FC, useState } from "react";
import styles from "./index.module.scss";
import { GoMarkGithub } from "react-icons/go";
import { BsTelegram } from "react-icons/bs";
import { ImLinkedin } from "react-icons/im";
import { GrMail } from "react-icons/gr";
import { AiFillPhone } from "react-icons/ai";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { MdOutlineContentCopy } from "react-icons/md";
import toast, { Toaster } from "react-hot-toast";
import dsf from "../../../../assets/Home/bg.svg";
const Contacts: FC = () => {
  const handleCopyInfo = (e: string, type: string) => {
    navigator.clipboard.writeText(e);
    toast(`Copied ${type}`, {
      position: "bottom-right",
      icon: <IoCheckmarkDoneSharp />,
      style: {
        fontSize: "16px",
        fontWeight: 400,
        fontFamily: "Raleway",
      },
    });
  };

  return (
    <div className={styles.contactsWrapper} id="contacts">
      <h2 className={styles.title}>Contacts</h2>
      <div className={styles.links}>
        <span>
          <a target="_blank" href="https://www.linkedin.com/in/lumenatom/">
            <ImLinkedin />
            <h2>LinkedIn</h2>
          </a>
          <MdOutlineContentCopy
            onClick={() =>
              handleCopyInfo("https://www.linkedin.com/in/lumenatom/", "link")
            }
          />
        </span>
        <span>
          <a target="_blank" href="https://t.me/Arthur_Shevtsov">
            <BsTelegram />
            <h2>@Arthur_Shevtsov</h2>
          </a>
          <MdOutlineContentCopy
            onClick={() => handleCopyInfo("@Arthur_Shevtsov", "name")}
          />
        </span>
        <span>
          <a target="_blank" href="mailto:Lumenatom@gmail.com">
            <GrMail />
            <h2>Lumenatom@gmail.com</h2>
          </a>
          <MdOutlineContentCopy
            onClick={() =>
              handleCopyInfo("mailto:Lumenatom@gmail.com", "email")
            }
          />
        </span>
        <span>
          <a target="_blank" href="tel:+380661969163">
            <AiFillPhone />
            <h2>+380661969163</h2>
          </a>
          <MdOutlineContentCopy
            onClick={() => handleCopyInfo("+380661969163", "phone number")}
          />
        </span>
        <span>
          <a target="_blank" href="https://github.com/Lumenatom">
            <GoMarkGithub />
            <h2>GitHub</h2>
          </a>
          <MdOutlineContentCopy
            onClick={() =>
              handleCopyInfo("https://github.com/Lumenatom", "link")
            }
          />
        </span>
      </div>
      <Toaster />
    </div>
  );
};

export default Contacts;
