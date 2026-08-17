import { forwardRef, useState } from "react";
import "./service.scss";
import { services, featuredProjects } from "../../Helper/data";
import {
  CodeOutlined,
  MobileOutlined,
  ThunderboltOutlined,
  RobotOutlined,
  AppstoreOutlined,
  CheckCircleFilled,
  FolderOpenOutlined,
} from "@ant-design/icons";

const Service = forwardRef<HTMLDivElement, {}>((_props, ref) => {
  const [selectedFilter, setSelectedFilter] = useState<string>("All");

  const serviceIcons: Record<string, any> = {
    CodeOutlined: <CodeOutlined />,
    MobileOutlined: <MobileOutlined />,
    ThunderboltOutlined: <ThunderboltOutlined />,
    RobotOutlined: <RobotOutlined />,
  };

  const projectFilters = ["All", "Full Stack", "Frontend"];

  const filteredProjects =
    selectedFilter === "All"
      ? featuredProjects
      : featuredProjects.filter((p) => p.category === selectedFilter);

  return (
    <section ref={ref} id="serviceMain" className="services-section">
      <div className="services-container">
        {/* Section Header */}
        <div className="section-header-center">
          <span className="section-badge">
            <AppstoreOutlined /> Solutions & Engineering
          </span>
          <h2 className="section-title">
            What I <span className="gradient-text">Build & Deliver</span>
          </h2>
          <p className="section-subtitle">
            From zero-to-one product development to scaling production enterprise systems with high performance, security, and intuitive UX.
          </p>
        </div>

        {/* Services / Core Specializations Cards */}
        <div className="services-grid">
          {services.map((svc) => (
            <div key={svc.id} className="service-card glass-card">
              <div className="service-icon-wrap">
                {serviceIcons[svc.icon] || <CodeOutlined />}
              </div>
              <h3 className="service-title">{svc.title}</h3>
              <p className="service-desc">{svc.description}</p>
              <ul className="service-bullets">
                {svc.bullets.map((b) => (
                  <li key={b}>
                    <CheckCircleFilled className="bullet-icon" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Featured Projects Portfolio Section */}
        <div className="projects-showcase-wrap">
          <div className="projects-header">
            <div>
              <span className="projects-badge">
                <FolderOpenOutlined /> Portfolio Highlights
              </span>
              <h3 className="projects-title">Featured Projects & Systems</h3>
            </div>

            {/* Filter Pills */}
            <div className="project-filters">
              {projectFilters.map((filter) => (
                <button
                  key={filter}
                  className={`filter-btn ${selectedFilter === filter ? "active" : ""}`}
                  onClick={() => setSelectedFilter(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <div key={project.id} className="project-card glass-card">
                {/* Browser Window Header Chrome */}
                <div className="project-window-bar">
                  <div className="window-dots">
                    <span className="dot red" />
                    <span className="dot yellow" />
                    <span className="dot green" />
                  </div>
                  <span className="window-category">{project.category}</span>
                </div>

                <div className="project-card-body">
                  <h4 className="project-title">{project.title}</h4>
                  <p className="project-desc">{project.description}</p>

                  <div className="project-highlights-box">
                    <span className="highlights-label">Key Highlights:</span>
                    <ul className="highlights-list">
                      {project.highlights.map((h, i) => (
                        <li key={i}>
                          <span className="highlight-dot">›</span> {h}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="project-tech-tags">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="tech-pill">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

export default Service;
