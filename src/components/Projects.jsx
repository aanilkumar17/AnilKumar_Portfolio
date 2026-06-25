import { useReveal } from "../hooks/useReveal";
import { projects } from "../data/portfolio";
import "./Projects.css";

export default function Projects() {
  const [ref, visible] = useReveal();

  return (
    <div className="projects-bg">
      <div className="container">
        <div ref={ref} className={`reveal ${visible ? "visible" : ""}`}>
          <div className="section-tag">🚀 What I've Built</div>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-sub">
            Real-world applications built with modern technologies. Each project represents a unique challenge and learning experience.
          </p>
          <div className="divider" />
        </div>

        <div className="projects-grid">
          {projects.map((proj, i) => (
            <ProjectCard key={i} proj={proj} index={i} />
          ))}
        </div>

        <div className="more-projects">
          <a href="https://github.com/aanilkumar17" target="_blank" rel="noreferrer" className="btn btn-outline">
            View All on GitHub ↗
          </a>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ proj, index }) {
  const [ref, visible] = useReveal(0.1);

  return (
    <div
      ref={ref}
      className={`project-card card reveal ${visible ? "visible" : ""}`}
      style={{ transitionDelay: `${index * 0.12}s`, "--color": proj.color }}
    >
      <div className="project-top">
        <div className="project-emoji" style={{ background: `${proj.color}15` }}>
          {proj.emoji}
        </div>
        <a href={proj.github} target="_blank" rel="noreferrer" className="project-github">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
          </svg>
        </a>
      </div>

      <h3 className="project-title">{proj.title}</h3>
      <p className="project-desc">{proj.description}</p>

      <div className="project-tech">
        {proj.tech.map((t) => (
          <span key={t} className="tag">{t}</span>
        ))}
      </div>

      <div className="project-bar">
        <div className="project-bar-fill" style={{ background: proj.color }} />
      </div>
    </div>
  );
}
