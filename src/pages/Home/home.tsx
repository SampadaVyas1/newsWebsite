import NavBar from "../../component/navBar/navBar";
import HeroBanner from "../../component/heroBanner";
import MenuCards from "../../component/menuCards";
import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import Layout from "../../component/layout";

const Home = () => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  return (
    <>
      {/* <NavBar setLoading={setLoading} /> */}
      <Layout>
        <HeroBanner />
        <MenuCards />
      </Layout>
    </>
  );
};

export default Home;
