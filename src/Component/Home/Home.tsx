import {
  LinkedinOutlined,
  GithubOutlined,
  FacebookOutlined,
  InstagramOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import { personal_details } from "../../Helper/data";
import "./home.scss";

const Home = () => {
  return (
    <div className="home_main">
      <h1 className="heading">
        {personal_details?.first_name} {personal_details?.last_name}
      </h1>
      <p className="para">
        I am a <span className="base animate-fd">Frontend Developer</span>
      </p>
      <div className="icons-div">
        <LinkedinOutlined
          className="icon"
          onClick={() => {
            window.open("https://github.com/vishu39", "_blank");
          }}
        />
        <GithubOutlined
          className="icon"
          onClick={() => {
            window.open("https://github.com/vishu39", "_blank");
          }}
        />
        <FacebookOutlined className="icon" />
        <InstagramOutlined className="icon" />
      </div>
      <Button className="cv_button">Download Cv</Button>
    </div>
  );
};

export default Home;
