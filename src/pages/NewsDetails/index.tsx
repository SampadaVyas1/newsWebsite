import NavBar from "../../component/navBar/navBar";
import News from "../../component/news";
import { useParams } from "react-router-dom";

const NewsDetails = (props: any) => {
  const { id } = useParams();
  return (
    <>
      <NavBar />
      <News />
    </>
  );
};

export default NewsDetails;
