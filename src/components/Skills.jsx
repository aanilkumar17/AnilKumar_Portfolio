import { useReveal } from "../hooks/useReveal";
import { skills } from "../data/portfolio";
import "./Skills.css";

export default function Skills() {
  const [ref, visible] = useReveal();

  return (
    <div className="container">
      <div ref={ref} className={`reveal ${visible ? "visible" : ""}`}>
        <div className="section-tag">⚡ What I Do</div>
        <h2 className="section-title">
          My <span className="gradient-text">Skill Set</span>
        </h2>
        <p className="section-sub">
          A diverse set of technical skills focused on building intelligent systems and modern web applications.
        </p>
        <div className="divider" />
      </div>

      <div className="skills-grid">
        {skills.map((skill, i) => (
          <SkillCard key={i} skill={skill} index={i} />
        ))}
      </div>
    </div>
  );
}

function SkillCard({ skill, index }) {
  const [ref, visible] = useReveal(0.1);

  return (
    <div
      ref={ref}
      className={`skill-card card reveal ${visible ? "visible" : ""}`}
      style={{ transitionDelay: `${index * 0.12}s` }}
    >
      <div className="skill-header">
        <div className="skill-emoji" style={{ background: `${skill.color}15`, border: `1px solid ${skill.color}30` }}>
          {skill.emoji}
        </div>
        <h3 className="skill-title">{skill.title}</h3>
      </div>

      <ul className="skill-list">
        {skill.skills.map((s, j) => (
          <li key={j} className="skill-item">
            <span className="skill-bullet" style={{ background: skill.color }} />
            {s}
          </li>
        ))}
      </ul>

      <div className="skill-tech">
        {skill.tech.map((t) => (
          <span key={t} className="tag" style={{ "--accent": skill.color }}>
            {t}
          </span>
        ))}
      </div>

      <div className="skill-glow" style={{ background: skill.color }} />
    </div>
  );
}
