import { useState } from "react";
import { navBarData } from "../fullWidthNavBar/navBar";
import classes from "./navDrawer.module.scss";
import closeSvg from "../../svg/close.svg";
import menuIcon from "../../svg/menu.svg";
import { useNavigate } from "react-router-dom";
const NavDrawer = () => {
  const [toggleMenu, settoggleMenu] = useState(false);
  const navigate = useNavigate();

  const navigateToAboutPage = (id: number) => {
    id ? navigate(`/about/${id}`) : navigate("/");
    settoggleMenu(false);
  };
  return (
    <div className={classes.navDrawer}>
      {toggleMenu ? (
        <img
          src={closeSvg}
          alt=""
          onClick={() => settoggleMenu(false)}
          className={classes.closeIcon}
        />
      ) : (
        <img src={menuIcon} alt="" onClick={() => settoggleMenu(true)} />
      )}
      {toggleMenu && (
        <div className={classes.menuListDropDownWrapper}>
          <div className={classes.menuListDevice}>
            {navBarData?.map((element) => {
              return (
                <div onClick={() => navigateToAboutPage(element.id)}>
                  {element.title}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default NavDrawer;
