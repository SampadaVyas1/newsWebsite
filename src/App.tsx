import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/home";
import About from "./pages/About";
import NewsDetails from "./pages/NewsDetails";
import ReadMore from "./component/readmore";
import Trello from "./pages/trello";

function App() {
  return (
    <div style={{ overflowX: "hidden" }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newsDetails/:news" element={<NewsDetails />} />
        <Route path="/about/:id" element={<About />} />
        <Route path="/readMore" element={<ReadMore />} />
        <Route path="/trello" element={<Trello />} />
      </Routes>
    </div>
  );
}

export default App;
