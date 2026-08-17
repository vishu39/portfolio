import { forwardRef } from "react";
import {
  LinkedinOutlined,
  GithubOutlined,
  MailOutlined,
  RocketFilled,
  ThunderboltFilled,
  FireFilled,
  ArrowRightOutlined,
  DownOutlined,
  BranchesOutlined,
} from "@ant-design/icons";
import "./home.scss";
import { personal_details } from "../../Helper/data";

interface HomeProps {
  onExploreClick?: () => void;
  onContactClick?: () => void;
  onResumeClick?: () => void;
}

const Home = forwardRef<HTMLDivElement, HomeProps>(
  ({ onExploreClick, onContactClick, onResumeClick }, ref) => {
    return (
      <section ref={ref} id="homeMain" className="hero-section">
        {/* Ambient Funky Glow Orbs */}
        <div className="orb-light orb-pink" />
        <div className="orb-light orb-purple" />
        <div className="orb-light orb-cyan" />
        <div className="orb-light orb-orange" />

        <div className="hero-container">
          {/* Main Hero Split Grid */}
          <div className="hero-grid">
            {/* Left Column: Intro & Action */}
            <div className="hero-left">
              {/* Status Badge */}
              <div className="hero-status-pill">
                <span className="status-ping" />
                <span className="status-text">⚡ Open to High-Impact Senior Roles</span>
              </div>

              <h1 className="hero-main-title">
                Building <span className="gradient-funky-text">fast, scalable</span> web &amp; mobile products — end to end
              </h1>

              <div className="hero-identity-row">
                <span className="name-intro">Hey, I'm <strong>{personal_details.full_name}</strong> 🚀</span>
                <span className="dot-sep">•</span>
                <span className="role-tag">Full Stack Engineer</span>
                <span className="dot-sep">•</span>
                <span className="exp-badge">4.5+ Yrs Exp</span>
              </div>

              <p className="hero-description">
                Bridging modern reactive frontend architectures (<strong>React</strong>, <strong>Angular</strong>, <strong>Ionic</strong>) with high-throughput <strong>Node.js</strong> backends, real-time <strong>Socket.io</strong> pipelines, and AI intelligence via <strong>ChatGPT API & OCR</strong>.
              </p>

              {/* Call to Actions */}
              <div className="hero-cta-group">
                <button className="cta-glow-btn" onClick={onResumeClick}>
                  <span>Explore Journey</span>
                  <RocketFilled className="cta-icon" />
                </button>

                <button className="cta-glass-btn" onClick={onContactClick}>
                  <span>Let's Talk Code</span>
                  <ArrowRightOutlined className="cta-arrow" />
                </button>
              </div>

              {/* Quick Key Metrics */}
              <div className="hero-stat-cards">
                <div className="stat-mini-card">
                  <div className="stat-icon pink"><FireFilled /></div>
                  <div>
                    <div className="stat-num">4.5+ Yrs</div>
                    <div className="stat-sub">Full Stack Exp</div>
                  </div>
                </div>

                <div className="stat-mini-card">
                  <div className="stat-icon purple"><ThunderboltFilled /></div>
                  <div>
                    <div className="stat-num">15+ Modules</div>
                    <div className="stat-sub">Enterprise Scale</div>
                  </div>
                </div>

                <div className="stat-mini-card">
                  <div className="stat-icon cyan"><span style={{ fontSize: "1.1rem" }}>📱</span></div>
                  <div>
                    <div className="stat-num">Web + Mobile</div>
                    <div className="stat-sub">React & Ionic</div>
                  </div>
                </div>
              </div>

              {/* Social Bar */}
              <div className="hero-social-bar">
                <span className="social-txt">Connect with me:</span>
                <div className="social-btns-wrap">
                  <a
                    href={personal_details.social_links.github}
                    target="_blank"
                    rel="noreferrer"
                    className="social-circle github"
                    aria-label="GitHub"
                  >
                    <GithubOutlined />
                  </a>
                  <a
                    href={personal_details.social_links.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="social-circle linkedin"
                    aria-label="LinkedIn"
                  >
                    <LinkedinOutlined />
                  </a>
                  <a
                    href={`mailto:${personal_details.email}`}
                    className="social-circle mail"
                    aria-label="Email"
                  >
                    <MailOutlined />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Code Terminal Showcase */}
            <div className="hero-right">
              {/* Floating badges */}
              <div className="float-badge float-1">
                <span className="f-icon">⚛️</span> React & Angular
              </div>
              <div className="float-badge float-2">
                <span className="f-icon">🤖</span> ChatGPT & OCR
              </div>
              <div className="float-badge float-3">
                <span className="f-icon">📲</span> Ionic iOS & Android
              </div>

              {/* Code Terminal Box */}
              <div className="developer-terminal-card glass-card">
                {/* Window Chrome Header */}
                <div className="terminal-header">
                  <div className="window-dots">
                    <span className="dot red" />
                    <span className="dot yellow" />
                    <span className="dot green" />
                  </div>
                  <div className="terminal-title">
                    <BranchesOutlined /> developerProfile.ts
                  </div>
                  <div className="terminal-tag">✨ v2.1.1</div>
                </div>

                {/* Code Content */}
                <div className="terminal-body font-mono">
                  <div className="code-line">
                    <span className="line-no">01</span>
                    <span className="tok-kw">const</span> <span className="tok-var">developer</span> = &#123;
                  </div>
                  <div className="code-line">
                    <span className="line-no">02</span>
                    <span className="indent">  </span><span className="tok-prop">name</span>: <span className="tok-str">"{personal_details.full_name}"</span>,
                  </div>
                  <div className="code-line">
                    <span className="line-no">03</span>
                    <span className="indent">  </span><span className="tok-prop">role</span>: <span className="tok-str">"Full Stack Developer"</span>,
                  </div>
                  <div className="code-line">
                    <span className="line-no">04</span>
                    <span className="indent">  </span><span className="tok-prop">experience</span>: <span className="tok-str">"4.5+ Years"</span>,
                  </div>
                  <div className="code-line">
                    <span className="line-no">05</span>
                    <span className="indent">  </span><span className="tok-prop">currentRole</span>: &#123;
                  </div>
                  <div className="code-line">
                    <span className="line-no">06</span>
                    <span className="indent">    </span><span className="tok-prop">company</span>: <span className="tok-str">"SimplifyMVT"</span>,
                  </div>
                  <div className="code-line">
                    <span className="line-no">07</span>
                    <span className="indent">    </span><span className="tok-prop">focus</span>: <span className="tok-str">"AI Email Intel, Sockets & Ionic"</span>
                  </div>
                  <div className="code-line">
                    <span className="line-no">08</span>
                    <span className="indent">  </span>&#125;,
                  </div>
                  <div className="code-line">
                    <span className="line-no">09</span>
                    <span className="indent">  </span><span className="tok-prop">coreStack</span>: [
                  </div>
                  <div className="code-line">
                    <span className="line-no">10</span>
                    <span className="indent">    </span><span className="tok-str">"React"</span>, <span className="tok-str">"Angular"</span>, <span className="tok-str">"TypeScript"</span>,
                  </div>
                  <div className="code-line">
                    <span className="line-no">11</span>
                    <span className="indent">    </span><span className="tok-str">"Node.js"</span>, <span className="tok-str">"MongoDB"</span>, <span className="tok-str">"Ionic App"</span>
                  </div>
                  <div className="code-line">
                    <span className="line-no">12</span>
                    <span className="indent">  </span>],
                  </div>
                  <div className="code-line">
                    <span className="line-no">13</span>
                    <span className="indent">  </span><span className="tok-prop">status</span>: <span className="tok-status">"Ready to Build & Scale 🔥"</span>
                  </div>
                  <div className="code-line">
                    <span className="line-no">14</span>
                    &#125;;
                  </div>
                </div>

                {/* Bottom Bar in Terminal */}
                <div className="terminal-footer">
                  <span className="cursor-indicator" />
                  <span className="term-text">Live • TypeScript • UTF-8</span>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Down Hint */}
          <div className="scroll-indicator-wrap" onClick={onExploreClick}>
            <span className="scroll-text">Explore Portfolio</span>
            <DownOutlined className="scroll-arrow" />
          </div>
        </div>
      </section>
    );
  }
);

export default Home;
