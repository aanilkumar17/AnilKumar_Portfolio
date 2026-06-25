import { useReveal } from "../hooks/useReveal";
import { certifications } from "../data/portfolio";
import "./Certifications.css";

export default function Certifications() {
  const [ref, visible] = useReveal();

  return (
    <div className="container">
      <div ref={ref} className={`reveal ${visible ? "visible" : ""}`}>
        <div className="section-tag">🏆 Achievements</div>
        <h2 className="section-title">
          Licenses & <span className="gradient-text">Certifications</span>
        </h2>
        <p className="section-sub">
          Professional credentials that validate my skills across cloud, data analytics, AI, and English proficiency.
        </p>
        <div className="divider" />
      </div>

      <div className="certs-grid">
        {certifications.map((cert, i) => (
          <CertCard key={i} cert={cert} index={i} />
        ))}
      </div>
    </div>
  );
}

function CertCard({ cert, index }) {
  const [ref, visible] = useReveal(0.1);

  return (
    <a
      ref={ref}
      href={cert.link}
      target="_blank"
      rel="noreferrer"
      className={`cert-card card reveal ${visible ? "visible" : ""}`}
      style={{ transitionDelay: `${index * 0.08}s`, "--color": cert.color }}
    >
      <div className="cert-emoji">{cert.emoji}</div>
      <h3 className="cert-title">{cert.title}</h3>
      <p className="cert-issuer">{cert.issuer}</p>
      <div className="cert-view">View Certificate ↗</div>
      <div className="cert-glow" style={{ background: cert.color }} />
    </a>
  );
}
