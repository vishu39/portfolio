import AboutMe from "./Content/AboutMe";
import Home from "./Home";
import Toolbar from "./Toolbar";
import "./right.scss";

const Right = () => {
  return (
    <div className="right-main">
      <div className="header">
        <Toolbar />
      </div>
      <div className="main">
        <Home />
        <AboutMe/>
      </div>
    </div>
  );
};

export default Right;
