import { useReveal } from "../hooks/useReveal";
import { education, competitive } from "../data/portfolio";
import "./Education.css";

export default function Education() {
  const [ref, visible] = useReveal();

  return (
    <div className="education-bg">
      <div className="container">
        <div ref={ref} className={`reveal ${visible ? "visible" : ""}`}>
          <div className="section-tag">🎓 My Journey</div>
          <h2 className="section-title">
            Education & <span className="gradient-text">Academics</span>
          </h2>
          <p className="section-sub">
            Building a strong foundation in technology and computer science.
          </p>
          <div className="divider" />
        </div>

        <div className="edu-layout">
          <div className="edu-cards">
            {education.map((edu, i) => (
              <EduCard key={i} edu={edu} index={i} />
            ))}
          </div>

          <div className="coding-section">
            <h3 className="coding-title">Competitive Coding</h3>
            <p className="coding-sub">Solving problems and sharpening algorithmic thinking</p>
            <div className="coding-profiles">
              {competitive.map((c, i) => (
                <a
                  key={i}
                  href={c.link}
                  target="_blank"
                  rel="noreferrer"
                  className="coding-card card"
                  style={{ "--color": c.color }}
                >
                  <span className="coding-emoji">{c.emoji}</span>
                  <div>
                    <div className="coding-name">{c.name}</div>
                    <div className="coding-link-text">View Profile ↗</div>
                  </div>
                </a>
              ))}
            </div>

            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-number gradient-text">2+</div>
                <div className="stat-label">Years Learning</div>
              </div>
              <div className="stat-item">
                <div className="stat-number gradient-text">6+</div>
                <div className="stat-label">Certifications</div>
              </div>
              <div className="stat-item">
                <div className="stat-number gradient-text">90%</div>
                <div className="stat-label">Inter Score</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function EduCard({ edu, index }) {
  const [ref, visible] = useReveal(0.1);

  return (
    <div
      ref={ref}
      className={`edu-card card reveal ${visible ? "visible" : ""}`}
      style={{ transitionDelay: `${index * 0.15}s` }}
    >
      <div className="edu-top">
        <div className="edu-emoji" style={{ background: `${edu.color}15` }}>
          {edu.emoji}
        </div>
        <div className="edu-badge">{edu.duration}</div>
      </div>

      <h3 className="edu-school">{edu.school}</h3>
      <p className="edu-degree">{edu.degree}</p>
      <p className="edu-location">📍 {edu.location}</p>

      {edu.grade && (
        <div className="edu-grade">
          <span className="grade-label">Grade</span>
          <span className="grade-value" style={{ color: edu.color }}>{edu.grade}</span>
        </div>
      )}

      <ul className="edu-desc">
        {edu.description.map((d, i) => (
          <li key={i}>{d}</li>
        ))}
      </ul>

      <a href={edu.link} target="_blank" rel="noreferrer" className="edu-link">
        Visit Website ↗
      </a>
    </div>
  );
}
