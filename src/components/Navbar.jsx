import { useState, useEffect } from "react";
import "./Navbar.css";

const navLinks = [
  { id: "home", label: "Home" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "certifications", label: "Certs" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navbar({ activeSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-inner">
        <div className="nav-logo" onClick={() => scrollTo("home")}>
          <span className="logo-bracket">&lt;</span>
          <span className="logo-name">AnilKumar</span>
          <span className="logo-bracket">/&gt;</span>
        </div>

        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                className={`nav-link ${activeSection === link.id ? "active" : ""}`}
                onClick={() => scrollTo(link.id)}
              >
                {link.label}
                {activeSection === link.id && <span className="nav-dot" />}
              </button>
            </li>
          ))}
        </ul>

        <a
          href="https://drive.google.com/file/d/157feoHXp1Qdix3SqWhRK0PLwqmcoxIJB/view"
          target="_blank"
          rel="noreferrer"
          className="btn btn-primary nav-resume"
        >
          Resume ↗
        </a>

        <button
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
}
