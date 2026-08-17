import { forwardRef, useState } from "react";
import "./about.scss";
import {
  LaptopOutlined,
  StarFilled,
  FireFilled,
} from "@ant-design/icons";
import { skillCategories, personal_details } from "../../Helper/data";

const About = forwardRef<HTMLDivElement, {}>((_props, ref) => {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", ...skillCategories.map((c) => c.category)];

  const allSkills = skillCategories.flatMap((cat) =>
    cat.skills.map((s) => ({ ...s, category: cat.category, catEmoji: cat.emoji }))
  );

  const displayedSkills =
    activeCategory === "All"
      ? allSkills
      : allSkills.filter((s) => s.category === activeCategory);

  return (
    <section ref={ref} id="aboutMain" className="about-section">
      <div className="about-container">
        {/* Section Header */}
        <div className="section-header-center">
          <span className="section-badge">
            <LaptopOutlined /> About Me & Capabilities
          </span>
          <h2 className="section-title">
            Engineering with <span className="gradient-funky-text">Creativity & Speed</span>
          </h2>
          <p className="section-subtitle">
            A Full Stack Developer with 4.5+ years of hands-on experience building reactive web interfaces, enterprise APIs, and native-feeling mobile apps.
          </p>
        </div>

        {/* Bio Grid */}
        <div className="bio-grid">
          <div className="bio-card glass-card">
            <div className="bio-header">
              <span className="bio-tag">🔥 The Developer</span>
              <h3>Full-Stack Product Architect</h3>
            </div>
            <p className="bio-text">
              Hey there! I'm <strong>{personal_details.full_name}</strong>. Over the last <strong>4.5+ years</strong>, I have taken ownership of end-to-end features — transforming ideas into rock-solid web and mobile apps.
            </p>
            <p className="bio-text">
              My frontend core thrives on <strong>React, Angular, TypeScript, and Ionic</strong>, while my backend foundation is powered by <strong>Node.js, Express.js, MongoDB, and real-time Socket.io</strong>.
            </p>

            <div className="bio-highlights">
              <div className="highlight-pill">
                <span className="pill-emoji">✨</span> Clean, reusable component architecture
              </div>
              <div className="highlight-pill">
                <span className="pill-emoji">⚡</span> Real-time Socket.io event streaming
              </div>
              <div className="highlight-pill">
                <span className="pill-emoji">🤖</span> OpenAI / ChatGPT & Google Vision OCR
              </div>
              <div className="highlight-pill">
                <span className="pill-emoji">📱</span> Cross-platform iOS & Android mobile apps
              </div>
            </div>
          </div>

          <div className="stats-grid">
            <div className="stat-card glass-card">
              <span className="stat-emoji">⚡</span>
              <span className="stat-value gradient-text">4.5+</span>
              <span className="stat-label">Years Experience</span>
              <span className="stat-desc">Full stack & mobile engineering</span>
            </div>

            <div className="stat-card glass-card">
              <span className="stat-emoji">🚀</span>
              <span className="stat-value gradient-text">15+</span>
              <span className="stat-label">Enterprise Modules</span>
              <span className="stat-desc">AI intake, WMS, finance & portals</span>
            </div>

            <div className="stat-card glass-card">
              <span className="stat-emoji">🎯</span>
              <span className="stat-value gradient-text">100%</span>
              <span className="stat-label">Feature Ownership</span>
              <span className="stat-desc">Zero-to-production delivery</span>
            </div>

            <div className="stat-card glass-card">
              <span className="stat-emoji">📱</span>
              <span className="stat-value gradient-text">Multi-Platform</span>
              <span className="stat-label">Web + iOS & Android</span>
              <span className="stat-desc">Responsive SPAs & Ionic apps</span>
            </div>
          </div>
        </div>

        {/* Funky Skills Section */}
        <div className="skills-container">
          <div className="skills-header">
            <div>
              <span className="skills-badge">
                <FireFilled /> Tech Playground
              </span>
              <h3 className="skills-title">Skills & Technologies</h3>
            </div>

            {/* Funky Category Filter Pills */}
            <div className="category-filter-pills">
              {categories.map((cat) => {
                const catObj = skillCategories.find((c) => c.category === cat);
                return (
                  <button
                    key={cat}
                    className={`filter-pill ${activeCategory === cat ? "active" : ""}`}
                    onClick={() => setActiveCategory(cat)}
                  >
                    <span>{cat === "All" ? "🌈" : catObj?.emoji}</span>
                    <span>{cat}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Funky Tech Card Grid with colorful emojis & borders */}
          <div className="funky-skills-grid">
            {displayedSkills.map((skill) => (
              <div
                key={skill.name}
                className={`funky-tech-card glass-card ${skill.featured ? "is-featured" : ""}`}
                style={{ "--tech-color": skill.color || "#a259ff" } as any}
              >
                <div className="card-top">
                  <span className="tech-emoji-icon">{skill.emoji}</span>
                  <div className="tech-info-main">
                    <span className="tech-name">{skill.name}</span>
                    <span className="tech-tag">{skill.tag}</span>
                  </div>
                </div>

                {skill.featured && (
                  <span className="core-star-tag">
                    <StarFilled className="star-icon" /> Core
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

export default About;
