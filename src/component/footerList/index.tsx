import React from "react";
import classes from "./footerList.module.scss";
const FooterList = (props: any) => {
  const { footerData } = props;
  console.log(footerData);
  return (
    // <div className={classes.footer}>
      <div className={classes.footerListContainer}>
        {footerData.map((item: any) => {
          return (
            <div className={classes.footerDataDisplay}>
              <div className={classes.title}>{item.title}</div>
              <span className={classes.subItemDisplay}>
                {item.data.map((subItem: any) => {
                  return <div>{subItem}</div>;
                })}
              </span>
            </div>
          );
        })}
      <div className={classes.backToTop}>
        <div>Back To Top</div>
          <img
            src="https://cdn-icons-png.flaticon.com/512/6338/6338564.png"
            alt=""
            height={50}
            width={50}
          />
        </div>
      </div>
    // </div>
  );
};

export default FooterList;
