import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner container">
        <div className="footer-logo">
          <span style={{ color: "var(--accent)" }}>&lt;</span>
          AnilKumar
          <span style={{ color: "var(--accent)" }}>/&gt;</span>
        </div>
        <p className="footer-copy">
          © {new Date().getFullYear()} Anil Kumar Alakuntla. Built with React + Vite.
        </p>
        <p className="footer-love">
          Designed & Developed with <span className="heart">♥</span> in Hyderabad
        </p>
      </div>
    </footer>
  );
}
