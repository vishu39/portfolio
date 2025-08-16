// import { useEffect, useState } from 'react'
import { useEffect, useRef } from "react";
import useWindowSize from "../../Hooks/useWindowSize";
import "./layout.scss";
import {
  HistoryOutlined,
  HomeOutlined,
  MailOutlined,
  MenuOutlined,
  MergeOutlined,
  SnippetsOutlined,
} from "@ant-design/icons";
import { Dropdown, MenuProps } from "antd";
import Home from "../Home/Home";
import Contact from "../ContactUs/Contact";
import About from "../AboutUs/About";
import Service from "../Services/Service";
import Resume from "../Resume/Resume";

const Layout = () => {
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const serviceRef = useRef<HTMLDivElement>(null);
  const resumeRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const { width } = useWindowSize();

  useEffect(() => {}, [width]);

  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const items: MenuProps["items"] = [
    {
      label: (
        <div style={{ marginLeft: "24px" }}>
          <HomeOutlined style={{ marginRight: "12px" }} /> Home
        </div>
      ),
      key: "0",
      onClick: () => {
        scrollToSection(homeRef);
      },
    },
    {
      type: "divider",
    },
    {
      label: (
        <div style={{ marginLeft: "24px" }}>
          <MergeOutlined style={{ marginRight: "12px" }} /> About
        </div>
      ),
      key: "1",
      onClick: () => {
        scrollToSection(aboutRef);
      },
    },
    {
      type: "divider",
    },
    {
      label: (
        <div style={{ marginLeft: "24px" }}>
          <HistoryOutlined style={{ marginRight: "12px" }} /> Services
        </div>
      ),
      key: "2",
      onClick: () => {
        scrollToSection(serviceRef);
      },
    },
    {
      type: "divider",
    },
    {
      label: (
        <div style={{ marginLeft: "24px" }}>
          <SnippetsOutlined style={{ marginRight: "12px" }} /> Resume
        </div>
      ),
      key: "3",
      onClick: () => {
        scrollToSection(resumeRef);
      },
    },
    {
      type: "divider",
    },
    {
      label: (
        <div style={{ marginLeft: "24px" }}>
          <MailOutlined style={{ marginRight: "12px" }} /> Contact
        </div>
      ),
      key: "4",
      onClick: () => {
        scrollToSection(contactRef);
      },
    },
  ];

  return (
    <div className="main hide-scrollbar">
      <header>
        <div className="nav">
          <div
            style={{
              width: "50%",
            }}
          >
            <h2
              style={{
                margin: "0",
              }}
            >
              Portfolio
            </h2>
          </div>

          {width > 600 ? (
            <div
              className="navList"
              style={{
                width: "50%",
              }}
            >
              <span onClick={() => scrollToSection(homeRef)}>Home</span>
              <span onClick={() => scrollToSection(aboutRef)}>About</span>
              <span onClick={() => scrollToSection(serviceRef)}>Services</span>
              <span onClick={() => scrollToSection(resumeRef)}>Resume</span>
              <span onClick={() => scrollToSection(contactRef)}>Contact</span>
            </div>
          ) : (
            <div>
              <Dropdown
                overlayStyle={{ width: "50%" }}
                menu={{ items }}
                trigger={["click"]}
              >
                <MenuOutlined onClick={(e) => e.preventDefault()} />
              </Dropdown>
            </div>
          )}
        </div>
      </header>
      <div className="content">
        <Home ref={homeRef} />
        <About ref={aboutRef} />
        <Service ref={serviceRef} />
        <Resume ref={resumeRef} />
        <Contact ref={contactRef} />
      </div>
    </div>
  );
};

export default Layout;
