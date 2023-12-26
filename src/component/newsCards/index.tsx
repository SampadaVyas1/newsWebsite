import { useNavigate } from "react-router-dom";
import classes from "./newsCards.module.scss";
const NewsCards = (props: any) => {
  const { newsTitle, subNews, imgSrc } = props;
  const navigate = useNavigate();

  const handlOnclickOnCards = () => {
    navigate("/newsDetails/:news");
  };
  return (
    <div className={classes.newsCardContainer}>
      <div className={classes.cardContainer} onClick={handlOnclickOnCards}>
        <div className={classes.newsDetails}>
          <div className={classes.newsTitle}>{newsTitle}</div>
          <div className={classes.updatedTime}>{subNews}</div>
        </div>
        {imgSrc && (
          <img src={imgSrc} alt="" height={150} className={classes.newsImage} />
        )}
      </div>
    </div>
  );
};

export default NewsCards;
