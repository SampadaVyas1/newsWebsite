import React from "react";
import classes from "./footer.module.scss";
import FooterList from "../footerList";
import { navBarData } from "../../component/fullWidthNavBar/navBar";
import { footerData } from "./footerdata";
const Footer = () => {
  console.log(navBarData);
  return (
    <div className={classes.footerContainer}>
      <FooterList footerData={footerData} />
    </div>
  );
};

export default Footer;
