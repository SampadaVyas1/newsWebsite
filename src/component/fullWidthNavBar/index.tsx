import { navBarData } from "./navBar";
import classses from "./fullWidthNavBar.module.scss";
import { useNavigate } from "react-router-dom";
const FullWidthNavBar = () => {
  const navigate = useNavigate();

  const navigateToAboutPage = (id: number) => {
    id ? navigate(`/about/${id}`) : navigate("/");
  };
  return (
    <div className={classses.fullWidthNavBar}>
      {navBarData?.map((element) => {
        return (
          <div
            onClick={() => navigateToAboutPage(element.id)}
            className={classses.navTitle}
          >
            {element.title}
          </div>
        );
      })}
    </div>
  );
};

export default FullWidthNavBar;
