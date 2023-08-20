// Sidebar.js
import {
  CopyOutlined,
  HomeOutlined,
  LineChartOutlined,
  MailOutlined,
  UserOutlined,
} from "@ant-design/icons";
import "./Sidebar.scss";
import { useEffect, useState } from "react";
import { Tooltip } from "antd";
import { useLocation, useNavigate } from "react-router-dom";

const Sidebar = ({ isOpen, toggleSidebar }: any) => {
  const [selected, setSelected] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;

  useEffect(() => {
    setSelected(pathname.split("/")?.[1]);
  }, [pathname]);

  const setSelectedNav = (selectedNav: string) => {
    navigate(selectedNav);
  };

  return (
    <div className={`sidebar ${isOpen ? "" : "close"}`}>
      <button className="toggle-button" onClick={toggleSidebar}>
        {isOpen ? "Close" : "open"}
      </button>
      <nav>
        <ul>
          <li
            onClick={() => setSelectedNav("home")}
            className={`${selected === "home" ? "selected" : ""}`}
          >
            <span>
              <Tooltip title="Home">
                <HomeOutlined />
              </Tooltip>
            </span>{" "}
            {isOpen && <span>HOME</span>}
          </li>
          <li
            onClick={() => setSelectedNav("about-me")}
            className={`${selected === "about-me" ? "selected" : ""}`}
          >
            {" "}
            <span>
              <Tooltip title="About ME">
                <UserOutlined />
              </Tooltip>
            </span>{" "}
            {isOpen && <span>ABOUT ME</span>}
          </li>
          <li
            onClick={() => setSelectedNav("resume")}
            className={`${selected === "resume" ? "selected" : ""}`}
          >
            {" "}
            <span>
              <Tooltip title="Resume">
                <CopyOutlined />
              </Tooltip>
            </span>{" "}
            {isOpen && <span>RESUME</span>}
          </li>
          <li
            onClick={() => setSelectedNav("experience")}
            className={`${selected === "experience" ? "selected" : ""}`}
          >
            {" "}
            <span>
              <Tooltip title="Experience">
                <LineChartOutlined />
              </Tooltip>
            </span>{" "}
            {isOpen && <span>EXPERIENCE</span>}
          </li>
          <li
            onClick={() => setSelectedNav("contact-me")}
            className={`${selected === "contact-me" ? "selected" : ""}`}
          >
            {" "}
            <span>
              <Tooltip title="Contact">
                <MailOutlined />
              </Tooltip>
            </span>{" "}
            {isOpen && <span>CONTACT</span>}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
