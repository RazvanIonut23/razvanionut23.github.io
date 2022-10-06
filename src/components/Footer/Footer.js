import React from "react";
import s from "./footer.module.css";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <div className={s.container}>
      <h2>
        I hope to hear from you soon<span>!</span>
      </h2>
      <h4>
        I would be happy to hear from you! Do not hesitate to send me an email.
      </h4>
      <a href="mailto:gusterrazvan@gmail.com">
        <button className={s.footerButton}>Say Hi!</button>
      </a>
      <div className={s.socialMContainer}>
        <a href="mailto:gusterrazvan@gmail.com">
          <EmailRoundedIcon className={s.socialIcon} />
        </a>
        <a
          href="https://www.linkedin.com/in/razvan-guster-786440215/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon className={s.socialIcon} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
