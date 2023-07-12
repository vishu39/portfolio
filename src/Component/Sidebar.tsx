import {
  CopyOutlined,
  FacebookOutlined,
  GithubOutlined,
  HomeOutlined,
  InstagramOutlined,
  LineChartOutlined,
  LinkedinOutlined,
  MailOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { personal_details, socialMediaData } from "../Helper/data";
import "./sidebar.scss";
import avatarimage from "/assets/avatar.png";

const Sidebar = () => {
  return (
    <div className="sidebar-main">
      <div className="image-div">
        <img className="img" src={avatarimage} />
        <div className="nameTag">
          <span>{personal_details?.first_name}</span>{" "}
          <span>{personal_details?.last_name}</span>
        </div>
      </div>
      <div className="navigation-div">
        <div className="opt">
          <span>
            <HomeOutlined />
          </span>{" "}
          <span>HOME</span>
        </div>
        <div className="opt">
          <span>
            <UserOutlined />
          </span>{" "}
          <span>ABOUT ME</span>
        </div>
        <div className="opt">
          <span>
            <CopyOutlined />
          </span>{" "}
          <span>RESUME</span>
        </div>
        <div className="opt">
          <span>
            <LineChartOutlined />
          </span>{" "}
          <span>EXPERIENCE</span>
        </div>
        <div className="opt">
          <span>
            <MailOutlined />
          </span>{" "}
          <span>CONTACT</span>
        </div>
      </div>
      <div className="footer-div">
        <a
          style={{ color: "#00a3e1" }}
          href={socialMediaData?.linkedin}
          target="blank"
          className="icons"
        >
          <LinkedinOutlined />
        </a>
        <a
          style={{ color: "#00a3e1" }}
          href={socialMediaData?.github}
          target="blank"
          className="icons"
        >
          <GithubOutlined />
        </a>
        <a
          style={{ color: "#00a3e1" }}
          href={socialMediaData?.facebook}
          target="blank"
          className="icons"
        >
          <FacebookOutlined />
        </a>
        <a
          style={{ color: "#00a3e1" }}
          href={socialMediaData?.instagram}
          target="blank"
          className="icons"
        >
          <InstagramOutlined />
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
