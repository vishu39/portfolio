import { forwardRef, Fragment, useMemo, useState } from "react";
import type { CSSProperties } from "react";
import "./resume.scss";
import {
  workExperiences,
  educations,
  personal_details,
} from "../../Helper/data";
import type { WorkExperience, Education } from "../../Helper/data";
import {
  ReadOutlined,
  CalendarOutlined,
  EnvironmentOutlined,
  CheckCircleFilled,
  BranchesOutlined,
  DownOutlined,
  ArrowRightOutlined,
  ThunderboltFilled,
} from "@ant-design/icons";

type Milestone =
  | { kind: "work"; id: string; start: string; data: WorkExperience }
  | { kind: "edu"; id: string; start: string; data: Education };

type NodeConfig = { color: string; emoji: string };

const nodeConfigs: Record<string, NodeConfig> = {
  "class-10": { color: "#2dffb3", emoji: "📗" },
  "class-12": { color: "#4fd8ff", emoji: "📘" },
  btech: { color: "#bd8cff", emoji: "🎓" },
  "shippigo-intern": { color: "#ffc857", emoji: "🌱" },
  "shippigo-emiza": { color: "#00e5ff", emoji: "📦" },
  simplifymvt: { color: "#a259ff", emoji: "🚀" },
};

const fallbackConfig: NodeConfig = { color: "#a259ff", emoji: "✨" };

/** Cards per row on the snake track (desktop). */
const ROW_SIZE = 2;

const chunk = <T,>(list: T[], size: number): T[][] => {
  const rows: T[][] = [];
  for (let i = 0; i < list.length; i += size) rows.push(list.slice(i, i + size));
  return rows;
};

const countHighlights = (exp: WorkExperience) =>
  exp.categories.reduce((sum, c) => sum + c.items.length, 0);

const Resume = forwardRef<HTMLDivElement, {}>((_props, ref) => {
  const [activeTab, setActiveTab] = useState<"all" | "experience" | "education">("all");
  // Accordions start collapsed — only a short preview of each role is visible.
  const [expandedRoles, setExpandedRoles] = useState<Record<string, boolean>>({});

  const toggleRole = (id: string) =>
    setExpandedRoles((prev) => ({ ...prev, [id]: !prev[id] }));

  const milestones = useMemo<Milestone[]>(() => {
    const all: Milestone[] = [
      ...educations.map<Milestone>((edu) => ({
        kind: "edu",
        id: edu.id,
        start: edu.start,
        data: edu,
      })),
      ...workExperiences.map<Milestone>((exp) => ({
        kind: "work",
        id: exp.id,
        start: exp.start,
        data: exp,
      })),
    ];
    // Oldest first — the track reads 10th → 12th → college → first job → today.
    return all.sort((a, b) => a.start.localeCompare(b.start));
  }, []);

  const visible = useMemo(
    () =>
      milestones.filter((m) =>
        activeTab === "all"
          ? true
          : activeTab === "experience"
          ? m.kind === "work"
          : m.kind === "edu"
      ),
    [milestones, activeTab]
  );

  const rows = useMemo(() => chunk(visible, ROW_SIZE), [visible]);

  const expandableIds = useMemo(
    () =>
      visible
        .filter((m) => m.kind === "work" && countHighlights(m.data) > 2)
        .map((m) => m.id),
    [visible]
  );

  const allExpanded =
    expandableIds.length > 0 && expandableIds.every((id) => expandedRoles[id]);

  const toggleAll = () =>
    setExpandedRoles(
      allExpanded
        ? {}
        : expandableIds.reduce<Record<string, boolean>>((acc, id) => {
            acc[id] = true;
            return acc;
          }, {})
    );

  const renderEducation = (edu: Education, cfg: NodeConfig) => (
    <article
      className="ms-card edu-card glass-card"
      style={{ "--node-color": cfg.color } as CSSProperties}
    >
      <header className="ms-head">
        <span className="ms-year">{edu.yearLabel}</span>
        <span className="ms-kind edu">
          <ReadOutlined /> Education
        </span>
      </header>

      <div className="ms-body">
        <div className="ms-title-row">
          <span className="ms-emoji">{cfg.emoji}</span>
          <div>
            <h3 className="ms-heading">{edu.degree}</h3>
            <h4 className="ms-sub">{edu.institution}</h4>
          </div>
        </div>

        {edu.branch && <p className="edu-branch">{edu.branch}</p>}
        {edu.note && <p className="ms-note">{edu.note}</p>}
      </div>

      <footer className="ms-meta">
        <span className="chip">
          <CalendarOutlined /> {edu.period}
        </span>
        {edu.location && (
          <span className="chip soft">
            <EnvironmentOutlined /> {edu.location}
          </span>
        )}
      </footer>
    </article>
  );

  const renderWork = (exp: WorkExperience, cfg: NodeConfig) => {
    const total = countHighlights(exp);
    const isExpandable = total > 2;
    const isExpanded = !!expandedRoles[exp.id];
    const preview = exp.categories.flatMap((c) => c.items).slice(0, 2);
    const hiddenCount = total - preview.length;

    return (
      <article
        className={`ms-card work-card glass-card ${exp.current ? "is-current" : ""}`}
        style={{ "--node-color": cfg.color } as CSSProperties}
      >
        <header className="ms-head">
          <span className="ms-year">{exp.yearLabel}</span>
          <span className="ms-kind work">
            <ThunderboltFilled /> Experience
          </span>
          {exp.current && (
            <span className="live-badge">
              <span className="live-pulse" /> Active
            </span>
          )}
        </header>

        <div className="ms-body">
          <div className="ms-title-row">
            <span className="ms-emoji">{cfg.emoji}</span>
            <div>
              <h3 className="ms-heading">{exp.company}</h3>
              <h4 className="ms-sub role">{exp.role}</h4>
            </div>
          </div>

          {exp.summary && <p className="ms-note">{exp.summary}</p>}

          {isExpandable && (
            <div className="ms-stats">
              <span>
                <b>{exp.categories.length}</b> focus areas
              </span>
              <i />
              <span>
                <b>{total}</b> highlights
              </span>
            </div>
          )}

          {/* Collapsed state — just a taste of the work */}
          {isExpandable && !isExpanded && (
            <ul className="preview-list">
              {preview.map((item) => (
                <li key={item.title}>
                  <CheckCircleFilled className="tick" />
                  <span>{item.title}</span>
                </li>
              ))}
              {hiddenCount > 0 && (
                <li className="more">+{hiddenCount} more inside</li>
              )}
            </ul>
          )}

          {/* Expanded accordion body */}
          {isExpandable && isExpanded && (
            <div className="role-modules">
              {exp.categories.map((category) => (
                <section key={category.title} className="module-box">
                  <h5 className="module-title">
                    <span className="module-bar" />
                    {category.title}
                  </h5>

                  <div className="achievements-grid">
                    {category.items.map((item) => (
                      <div key={item.title} className="achievement-tile">
                        <div className="tile-title-row">
                          <CheckCircleFilled className="tick" />
                          <h6>{item.title}</h6>
                        </div>
                        <p className="tile-desc">{item.description}</p>
                        {item.tech && (
                          <div className="tile-tags">
                            {item.tech.map((t) => (
                              <span key={t} className="tech-pill">
                                {t}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          )}

          {isExpandable && (
            <button
              className={`accordion-toggle ${isExpanded ? "open" : ""}`}
              onClick={() => toggleRole(exp.id)}
              aria-expanded={isExpanded}
            >
              <span>{isExpanded ? "Hide breakdown" : "View full breakdown"}</span>
              <DownOutlined className="chev" />
            </button>
          )}
        </div>

        <footer className="ms-meta">
          <span className="chip">
            <CalendarOutlined /> {exp.period}
          </span>
          <span className="chip soft">
            <EnvironmentOutlined /> {exp.location}
          </span>
        </footer>
      </article>
    );
  };

  return (
    <section ref={ref} id="resumeMain" className="journey-section">
      <div className="journey-container">
        {/* Section Header */}
        <div className="section-header-center">
          <span className="section-badge">
            <BranchesOutlined /> Interactive Timeline
          </span>
          <h2 className="section-title">
            Career &amp; Education <span className="gradient-funky-text">Journey</span>
          </h2>
          <p className="section-subtitle">
            School to shipping production systems — {milestones.length} milestones from
            2014 to today, laid out end to end.
          </p>

          <div className="journey-filter-tabs">
            <button
              className={`journey-tab ${activeTab === "all" ? "active" : ""}`}
              onClick={() => setActiveTab("all")}
            >
              <span>🌈</span> Complete Journey
            </button>
            <button
              className={`journey-tab ${activeTab === "experience" ? "active" : ""}`}
              onClick={() => setActiveTab("experience")}
            >
              <span>💼</span> Work ({workExperiences.length})
            </button>
            <button
              className={`journey-tab ${activeTab === "education" ? "active" : ""}`}
              onClick={() => setActiveTab("education")}
            >
              <span>🎓</span> Education ({educations.length})
            </button>

            {expandableIds.length > 0 && (
              <button className="journey-tab ghost" onClick={toggleAll}>
                {allExpanded ? "Collapse all" : "Expand all"}
              </button>
            )}
          </div>
        </div>

        {/* Snake Timeline Track */}
        <div className="snake-timeline">
          {rows.map((row, rowIndex) => (
            <Fragment key={`row-${rowIndex}`}>
              <div className="snake-row">
                {row.map((m, colIndex) => {
                  const cfg = nodeConfigs[m.id] || fallbackConfig;
                  return (
                    <Fragment key={m.id}>
                      {colIndex > 0 && (
                        <div className="row-link" aria-hidden="true">
                          <span className="link-line" />
                          <span className="link-arrow">
                            <ArrowRightOutlined />
                          </span>
                        </div>
                      )}
                      <div
                        className="snake-cell"
                        style={{ "--node-color": cfg.color } as CSSProperties}
                      >
                        {m.kind === "edu"
                          ? renderEducation(m.data, cfg)
                          : renderWork(m.data, cfg)}
                      </div>
                    </Fragment>
                  );
                })}

                {/* Keeps a lone last card on the left half of the track */}
                {row.length < ROW_SIZE && (
                  <>
                    <div className="row-link is-empty" aria-hidden="true" />
                    <div className="snake-cell is-ghost" aria-hidden="true" />
                  </>
                )}
              </div>

              {rowIndex < rows.length - 1 && (
                <div className="snake-bridge" aria-hidden="true">
                  <svg viewBox="0 0 100 100" preserveAspectRatio="none">
                    <defs>
                      <linearGradient
                        id={`bridge-${rowIndex}`}
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop offset="0%" stopColor="#a259ff" stopOpacity="0.9" />
                        <stop offset="100%" stopColor="#00e5ff" stopOpacity="0.55" />
                      </linearGradient>
                    </defs>
                    <path
                      d={
                        row.length === ROW_SIZE
                          ? "M75 0 C75 45, 25 55, 25 100"
                          : "M25 0 L25 100"
                      }
                      fill="none"
                      stroke={`url(#bridge-${rowIndex})`}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeDasharray="7 7"
                      vectorEffect="non-scaling-stroke"
                    />
                  </svg>
                </div>
              )}
            </Fragment>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div className="timeline-cta-banner glass-card">
          <div className="cta-banner-text">
            <h3>Let's build something extraordinary together 🚀</h3>
            <p>Looking for a Full Stack Engineer who takes end-to-end ownership?</p>
          </div>
          <div className="cta-banner-buttons">
            <a
              href={personal_details.social_links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="cta-linkedin-btn"
            >
              Connect on LinkedIn
            </a>
            <a href={`mailto:${personal_details.email}`} className="cta-mail-btn">
              Email Vishu
            </a>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Resume;
