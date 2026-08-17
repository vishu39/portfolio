import { useEffect, useRef, useState } from "react";
import useWindowSize from "../../Hooks/useWindowSize";
import "./layout.scss";
import {
  HomeOutlined,
  UserOutlined,
  BranchesOutlined,
  AppstoreOutlined,
  MailOutlined,
  MenuOutlined,
  CloseOutlined,
  ArrowUpOutlined,
  GithubOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
import { Drawer } from "antd";
import Home from "../Home/Home";
import About from "../AboutUs/About";
import Resume from "../Resume/Resume";
import Service from "../Services/Service";
import Contact from "../ContactUs/Contact";
import { personal_details } from "../../Helper/data";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";

const Layout = () => {
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const resumeRef = useRef<HTMLDivElement>(null);
  const serviceRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const [activeSection, setActiveSection] = useState<string>("home");
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  const { width } = useWindowSize();

  const scrollToSection = (sectionRef: React.RefObject<HTMLDivElement>, sectionName: string) => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setActiveSection(sectionName);
      setMobileDrawerOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      setScrolled(window.scrollY > 50);

      const sections = [
        { name: "home", ref: homeRef },
        { name: "about", ref: aboutRef },
        { name: "resume", ref: resumeRef },
        { name: "service", ref: serviceRef },
        { name: "contact", ref: contactRef },
      ];

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = sections[i].ref.current;
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i].name);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", key: "home", icon: <HomeOutlined />, ref: homeRef },
    { name: "About & Skills", key: "about", icon: <UserOutlined />, ref: aboutRef },
    { name: "Journey Timeline", key: "resume", icon: <BranchesOutlined />, ref: resumeRef },
    { name: "Projects & Services", key: "service", icon: <AppstoreOutlined />, ref: serviceRef },
    { name: "Contact", key: "contact", icon: <MailOutlined />, ref: contactRef },
  ];

  return (
    <div className="portfolio-app-root">
      {/* Floating Navigation Header */}
      <header className={`navbar-header ${scrolled ? "scrolled" : ""}`}>
        <div className="navbar-container">
          <div
            className="navbar-brand"
            onClick={() => scrollToSection(homeRef, "home")}
          >
            <span className="brand-logo-icon">VS</span>
            <div className="brand-text">
              <span className="brand-name">{personal_details.full_name}</span>
              <span className="brand-tag">Full Stack Dev</span>
            </div>
          </div>

          <div className="navbar-actions">
            {/* Desktop Nav Items */}
            {width > 860 && (
              <nav className="desktop-nav">
                {navItems.map((item) => (
                  <button
                    key={item.key}
                    className={`nav-link ${activeSection === item.key ? "active" : ""}`}
                    onClick={() => scrollToSection(item.ref, item.key)}
                  >
                    <span className="nav-icon">{item.icon}</span>
                    <span>{item.name}</span>
                    {activeSection === item.key && <span className="active-glow-pill" />}
                  </button>
                ))}
              </nav>
            )}

            <ThemeSwitcher />

            {width <= 860 && (
              <button
                className="mobile-menu-btn"
                onClick={() => setMobileDrawerOpen(true)}
                aria-label="Open Navigation Menu"
              >
                <MenuOutlined />
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <Drawer
        title={
          <div className="drawer-title">
            <span className="brand-logo-icon">VS</span>
            <span>{personal_details.full_name}</span>
          </div>
        }
        placement="right"
        onClose={() => setMobileDrawerOpen(false)}
        open={mobileDrawerOpen}
        className="mobile-nav-drawer"
        width={Math.max(260, Math.min(320, width - 48))}
        closeIcon={<CloseOutlined />}
        styles={{ body: { padding: "20px" } }}
      >
        <div className="drawer-nav-list">
          {navItems.map((item) => (
            <button
              key={item.key}
              className={`drawer-link ${activeSection === item.key ? "active" : ""}`}
              onClick={() => scrollToSection(item.ref, item.key)}
            >
              <span className="drawer-icon">{item.icon}</span>
              <span>{item.name}</span>
            </button>
          ))}
        </div>

        <div className="drawer-theme-block">
          <p className="drawer-footer-text">Colour theme:</p>
          <ThemeSwitcher variant="inline" />
        </div>

        <div className="drawer-footer">
          <p className="drawer-footer-text">Get in touch:</p>
          <div className="drawer-socials">
            <a
              href={personal_details.social_links.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <GithubOutlined />
            </a>
            <a
              href={personal_details.social_links.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedinOutlined />
            </a>
            <a href={`mailto:${personal_details.email}`} aria-label="Email">
              <MailOutlined />
            </a>
          </div>
        </div>
      </Drawer>

      {/* Main Content Sections */}
      <main className="content-container">
        <Home
          ref={homeRef}
          onExploreClick={() => scrollToSection(aboutRef, "about")}
          onResumeClick={() => scrollToSection(resumeRef, "resume")}
          onContactClick={() => scrollToSection(contactRef, "contact")}
        />
        <About ref={aboutRef} />
        <Resume ref={resumeRef} />
        <Service ref={serviceRef} />
        <Contact ref={contactRef} />
      </main>

      {/* Footer */}
      <footer className="portfolio-footer">
        <div className="footer-container">
          <div className="footer-brand">
            <h4>{personal_details.full_name}</h4>
            <p>Full Stack Developer • 4.5+ Years Experience</p>
          </div>

          <div className="footer-links">
            <span onClick={() => scrollToSection(homeRef, "home")}>Home</span>
            <span onClick={() => scrollToSection(aboutRef, "about")}>About</span>
            <span onClick={() => scrollToSection(resumeRef, "resume")}>Journey</span>
            <span onClick={() => scrollToSection(serviceRef, "service")}>Projects</span>
            <span onClick={() => scrollToSection(contactRef, "contact")}>Contact</span>
          </div>

          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} Vishu Sharma. Crafted with React, TypeScript & Passion.</p>
            <button
              className="scroll-top-btn"
              onClick={() => scrollToSection(homeRef, "home")}
              aria-label="Scroll to top"
            >
              <ArrowUpOutlined /> Back to Top
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
