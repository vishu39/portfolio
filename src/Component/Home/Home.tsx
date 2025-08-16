import {
  LinkedinOutlined,
  FacebookOutlined,
  InstagramOutlined,
  DownOutlined,
} from "@ant-design/icons";
import "./home.scss";
import { forwardRef } from "react";

// import { useNavigate } from "react-router-dom";

const Home = forwardRef<HTMLDivElement, {}>((_props, ref) => {
  // const navigate = useNavigate();

  const navigateToMediaPages = (name: string) => {
    if (name === "facebook") {
      window.open("https://www.facebook.com/share/1Vwd7befMa/", "_blank");
    }
    if (name === "instagram") {
      window.open(
        "https://www.instagram.com/vishusharmak?igsh=MWdmbmJycGlrbTd2bA==",
        "_blank"
      );
    }
    if (name === "linkedin") {
      window.open(
        "https://www.linkedin.com/in/vishu-sharma-0628501b6",
        "_blank"
      );
    }
  };

  return (
    <div ref={ref} id="homeMain">
      <p style={{ color: "#cc005f" }}> HELLO, WORLD.</p>
      <h1>I'm Vishu Sharma.</h1>
      <div>
        <p>| Full-Stack Developer |</p>
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
          className="commonIconCss"
          onClick={() => navigateToMediaPages("facebook")}
        />
        <InstagramOutlined
          className="commonIconCss"
          onClick={() => navigateToMediaPages("instagram")}
        />
        <LinkedinOutlined
          className="commonIconCss"
          onClick={() => navigateToMediaPages("linkedin")}
        />
      </div>
    </div>
  );
});

export default Home;
