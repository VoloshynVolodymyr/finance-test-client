import React from "react";
import css from "./Footer.module.css";
import SocialLinks from "../SocialLinks/SocialLinks";
import { TbCopyright } from "react-icons/tb";

const Footer = () => {
  return (
    <div className={css.footer}>
      <div className={css.contacts}>
        <p>Contacts</p>
        <p>Volodymyr Voloshyn</p>
        <p>mailvoloshyn@gmail.com</p>
        <p>+38 099 44 44 761</p>
        <p>@VoloshynVolodymyr</p>
      </div>
      <div className={css.socialLinks}>
        <SocialLinks />
      </div>
      <div className={css.copyright}>
        <TbCopyright />
      </div>
    </div>
  );
};

export default Footer;
