import classes from "./mainNewsCard.module.scss";
import { useNavigate } from "react-router-dom";
const MainNewsCard = (props: any) => {
  const { mainNews } = props;
  const navigate = useNavigate();

  const handlOnclickOnCards = () => {
    navigate("/newsDetails/:news");
  };
  return (
    <div>
      <div className={classes.cardContainer} onClick={handlOnclickOnCards}>
        <div className={classes.heading}>{mainNews.title}</div>
        <div className={classes.newsDetails}>
          <div className={classes.newsTitle}>{mainNews.country}</div>
          <div className={classes.updatedtime}>{mainNews.time}</div>
        </div>
        <img
          src={mainNews.src}
          width={500}
          alt=""
          className={classes.imageSection}
        />
      </div>
    </div>
  );
};

export default MainNewsCard;
