import { forwardRef } from "react";
import "./about.scss";
import { Flex, Progress, Tooltip } from "antd";

const About = forwardRef<HTMLDivElement, any>((_props, ref) => {
  return (
    <div ref={ref} id="aboutMain">
      <div style={{ width: "100%", overflow: "hidden" }}>
        <h1 style={{ color: "#cc005f" }}>About Me</h1>
        <div className="mb-5">
          <p>
            Hi, I'm a Full Stack Developer with 4 years of experience building
            modern web and mobile applications. My core strength is frontend
            development — I have hands-on experience in React, Angular, and
            Ionic. Along with that, I have around a year of experience working
            with Node.js and backend development.
          </p>

          <p>
            I love creating user-friendly web applications with clean UI and
            writing well-structured, reusable code. Over the years, I’ve worked
            on different projects — from dashboards to mobile apps and REST
            APIs. I enjoy learning new technologies, solving problems, and
            building things that actually help users.
          </p>

          <p>
            My goal is to keep improving as a full stack developer and become a
            strong technical architect in the future.
          </p>
        </div>

        <div className="skillsDiv mt-5">
          <h2 style={{ color: "#cc005f" }}>Skills</h2>
          <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
            <li className="d-flex align-items-center gap-2 mb-3">
              <b>React:</b>
              <Tooltip title="100%" className="d-flex align-items-center">
                <Progress
                  size={[600, 15]}
                  percent={100}
                  strokeColor="#cc005f"
                  status="active"
                />
              </Tooltip>
            </li>

            <li className="d-flex align-items-center gap-2  mb-3">
              <b>Angular:</b>
              <Tooltip title="100%" className="d-flex align-items-center">
                <Progress
                  size={[600, 15]}
                  percent={100}
                  strokeColor="#cc005f"
                  status="active"
                />
              </Tooltip>
            </li>

            <li className="d-flex align-items-center gap-2  mb-3">
              <b>Ionic:</b>
              <Tooltip title="100%" className="d-flex align-items-center">
                <Progress
                  size={[600, 15]}
                  percent={100}
                  strokeColor="#cc005f"
                  status="active"
                />
              </Tooltip>
            </li>

            <li className="d-flex align-items-center gap-2  mb-3">
              <b>Node.js:</b>
              <Tooltip title="100%" className="d-flex align-items-center">
                <Progress
                  size={[600, 15]}
                  percent={100}
                  strokeColor="#cc005f"
                  status="active"
                />
              </Tooltip>
            </li>

            <li className="d-flex align-items-center gap-2  mb-3">
              <b>Express.js:</b>
              <Tooltip title="100%" className="d-flex align-items-center">
                <Progress
                  size={[600, 15]}
                  percent={100}
                  strokeColor="#cc005f"
                  status="active"
                />
              </Tooltip>
            </li>

            <li className="d-flex align-items-center gap-2 mb-3">
              <b>MongoDB:</b>
              <Tooltip title="100%" className="d-flex align-items-center">
                <Progress
                  size={[600, 15]}
                  percent={100}
                  strokeColor="#cc005f"
                  status="active"
                />
              </Tooltip>
            </li>

            <li className="d-flex align-items-center gap-2 mb-3">
              <b>HTML:</b>
              <Tooltip title="100%" className="d-flex align-items-center">
                <Progress
                  size={[600, 15]}
                  percent={100}
                  strokeColor="#cc005f"
                  status="active"
                />
              </Tooltip>
            </li>

            <li className="d-flex align-items-center gap-2 mb-3">
              <b>CSS:</b>
              <Tooltip title="100%" className="d-flex align-items-center">
                <Progress
                  size={[600, 15]}
                  percent={100}
                  strokeColor="#cc005f"
                  status="active"
                />
              </Tooltip>
            </li>

            <li className="d-flex align-items-center gap-2 mb-3">
              <b>JavaScript:</b>
              <Tooltip title="100%" className="d-flex align-items-center">
                <Progress
                  size={[600, 15]}
                  percent={100}
                  strokeColor="#cc005f"
                  status="active"
                />
              </Tooltip>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
});

export default About;
