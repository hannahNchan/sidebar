import React from "react";

import IMG_ME from "../../public/mesquare.jpg";
import "./styles.scss";

const Footer = () => {
  return (
    <div className="footer">
      <img className="footer__img" src={IMG_ME} alt="yo" />
      <span className="footer__text">Powered by Hannah</span>
    </div>
  );
};

export default Footer;
