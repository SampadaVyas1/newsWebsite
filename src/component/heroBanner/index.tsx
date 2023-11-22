import { Fragment } from "react";
import classes from "./heroBanner.module.scss";
import { DeviceType } from "../../utils/enum";
import useWindowUtil from "../../hooks/useWindowUtil";
import { useNavigate } from "react-router-dom";
const HeroBanner = () => {
  const { deviceType } = useWindowUtil();
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/readMore");
  };
  return (
    <Fragment>
      {deviceType === DeviceType.DESKTOP ? (
        <div className={classes.heroBannerContainer}>
          <div className={classes.bannerText}>
            <div className={classes.bannerHeading}>Stay Curious</div>
            <div className={classes.bannerSubText}>
              Discover stories, thinking, and expertise from writers on any
              topic.
            </div>
            <div>
              <button className={classes.readMore} onClick={handleNavigate}>
                Read More About Us
              </button>
            </div>
          </div>
          <div>
            <img
              src="https://static.vecteezy.com/system/resources/previews/004/595/726/non_2x/journalist-interview-hand-holding-microphone-with-news-symbol-concept-in-cartoon-illustration-on-white-background-vector.jpg"
              alt=""
              height={500}
              width={500}
              className={classes.bannerImage}
            />
          </div>
        </div>
      ) : (
        <div className={classes.heroBannerContainerMobile}>
          <div className={classes.bannerText}>
            <div className={classes.bannerHeading}>Stay Curious</div>
            <div className={classes.bannerSubText}>
              Discover stories, thinking, and expertise from writers on any
              topic.
            </div>
            <div>
              <button className={classes.readMore}>Read More About Us</button>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default HeroBanner;
