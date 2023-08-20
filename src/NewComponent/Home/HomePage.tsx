import { Button } from "antd";
import "./home.scss";
import {
  FacebookOutlined,
  GithubOutlined,
  InstagramOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";

const HomePage = () => {
  return (
    <div id="home_page">
      <div className="main">
        <h1 className="name">Hi, I am Vishu Sharma</h1>
        <h3 className="word">I am a Frontend Deeloper</h3>
        <div className="icons-div">
          <LinkedinOutlined className="icon" />
          <GithubOutlined className="icon" />
          <FacebookOutlined className="icon" />
          <InstagramOutlined className="icon" />
        </div>
        <Button className="cv_button">Download Cv</Button>
      </div>
    </div>
  );
};

export default HomePage;
