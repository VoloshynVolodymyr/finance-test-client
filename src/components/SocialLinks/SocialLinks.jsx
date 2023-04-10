import React from "react";
import css from "./SocialLinks.module.css";

import { ReactComponent as Facebook } from "../../images/Facebook.svg";
import { ReactComponent as Youtube } from "../../images/Youtube.svg";
import { ReactComponent as Twitter } from "../../images/Twitter.svg";
import { ReactComponent as Instagram } from "../../images/Instagram.svg";

const SocialLinks = () => {
  return (
    <div className={css.wrapper}>
      <a
        href="https://www.facebook.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Facebook className={css.links} width="20" height="20" />
      </a>
      <a
        href="https://www.youtube.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Youtube className={css.links} width="20" height="15" />
      </a>
      <a
        href="https://www.twitter.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Twitter className={css.links} width="20" height="16" />
      </a>
      <a
        href="https://www.instagram.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Instagram className={css.links} width="17" height="17" />
      </a>
    </div>
  );
};

export default SocialLinks;
