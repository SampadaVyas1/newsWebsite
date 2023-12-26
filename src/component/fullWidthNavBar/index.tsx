import { navBarData } from "./navBar";
import classses from "./fullWidthNavBar.module.scss";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";

const FullWidthNavBar = () => {
  const navigate = useNavigate();
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  const { news, id } = useParams();
  useEffect(() => {
    news != ":news" && isAuthenticated && navigate(`/about/${1}`);
  }, [isAuthenticated]);

  const navigateToAboutPage = (id: number) => {
    console.log("aoytr");
    id ? navigate(`/about/${id}`) : navigate("/");
  };
  return (
    <>
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
        <div className={classses.loginLogoutButton}>
          {isAuthenticated ? (
            <button
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
              className={classses.loginButton}
            >
              Log Out
            </button>
          ) : (
            <button
              onClick={() => {
                loginWithRedirect();
              }}
              className={classses.loginButton}
            >
              Log In
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default FullWidthNavBar;
