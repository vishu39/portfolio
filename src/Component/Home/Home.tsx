import {
  LinkedinOutlined,
  FacebookOutlined,
  InstagramOutlined,
  DownOutlined,
} from "@ant-design/icons";
import "./home.scss";
import { forwardRef } from "react";

const Home = forwardRef<HTMLDivElement, {}>((_props, ref) => {
  return (
    <div ref={ref} id="homeMain">
      <p style={{ color: "#cc005f" }}> HELLO, WORLD.</p>
      <h1>I'm Vishu Sharma.</h1>
      <div>
        <p>| Front-End Developer |</p>
      </div>

      <div className="btnDiv">
        <button className="moreAboutMeBtn">
          More About Me <DownOutlined className="icon" />
        </button>
      </div>

      <div
        style={{
          marginTop: "80px",
          display: "flex",
          justifyContent: "space-evenly",
          width: "100%",
        }}
      >
        <FacebookOutlined
          style={{
            color: "#cc005f",
            cursor: "pointer",
            fontSize: "30px",
            borderRadius: "5px",
          }}
        />
        <InstagramOutlined
          style={{
            color: "#cc005f",
            cursor: "pointer",
            fontSize: "30px",
            borderRadius: "5px",
          }}
        />
        <LinkedinOutlined
          style={{
            color: "#cc005f",
            cursor: "pointer",
            fontSize: "30px",
            borderRadius: "5px",
          }}
        />
      </div>
    </div>
  );
});

export default Home;
