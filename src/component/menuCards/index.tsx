import classes from "./menuCards.module.scss";
import TiltCard from "../tilt-card";
import { menuList } from "./menuList";

const MenuCards = () => {
  return (
    <div className={classes.menuCardContainer}>
      <div className={classes.menuCardList}>
        {menuList?.map((menuItem: any) => {
          return (
            <TiltCard
              title={menuItem.title}
              src={menuItem.src}
              naviagtPath={menuItem.navigatePath}
              id={menuItem.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MenuCards;
