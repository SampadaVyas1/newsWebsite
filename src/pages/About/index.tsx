import NavBar from "../../component/navBar/navBar";
import NewsCards from "../../component/newsCards";
import classes from "./about.module.scss";
import MainNewsCard from "../../component/mainNewsCard";
import { useParams } from "react-router-dom";
import { menuData } from "./menudata";

const About = () => {
  const { id } = useParams();

  const filterMenuList = menuData.filter((menu: any) => menu.id == id);
  return (
    <div>
      <NavBar />
      <div className={classes.newsCardsDetails}>
        <MainNewsCard mainNews={filterMenuList[0].mainNews} />
        {filterMenuList &&
          filterMenuList[0].data?.map((menu: any, index: number) => {
            return (
              <>
                <NewsCards
                  id={menu.id}
                  newsTitle={menu.newsTitle}
                  subNews={menu.subNews}
                  imgSrc={menu.imgSrc}
                />
              </>
            );
          })}
      </div>
    </div>
  );
};

export default About;
