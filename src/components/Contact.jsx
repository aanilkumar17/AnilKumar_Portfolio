import { useState } from "react";
import { useReveal } from "../hooks/useReveal";
import { contact, socialMediaLinks } from "../data/portfolio";
import "./Contact.css";

export default function Contact() {
  const [ref, visible] = useReveal();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailto = `mailto:${contact.email}?subject=Portfolio Contact from ${form.name}&body=${form.message} %0A%0AFrom: ${form.email}`;
    window.open(mailto);
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <div className="container">
      <div ref={ref} className={`reveal ${visible ? "visible" : ""}`}>
        <div className="section-tag">✉️ Get In Touch</div>
        <h2 className="section-title">
          Let's <span className="gradient-text">Connect</span>
        </h2>
        <p className="section-sub">
          I'm open to internships, collaborations, and exciting opportunities. Let's build something great together!
        </p>
        <div className="divider" />
      </div>

      <div className="contact-layout">
        <div className="contact-info">
          <div className="contact-info-card card">
            <h3 className="contact-info-title">Contact Info</h3>
            <div className="contact-items">
              <div className="contact-item">
                <div className="contact-icon">📧</div>
                <div>
                  <div className="contact-label">Email</div>
                  <a href={`mailto:${contact.email}`} className="contact-value">{contact.email}</a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div>
                  <div className="contact-label">Location</div>
                  <span className="contact-value">{contact.location}</span>
                </div>
              </div>
            </div>

            <div className="contact-social-title">Find me on</div>
            <div className="contact-socials">
              {socialMediaLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.link}
                  target="_blank"
                  rel="noreferrer"
                  className="contact-social-link"
                  style={{ "--color": s.color }}
                >
                  {s.name}
                  <span>↗</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <form className="contact-form card" onSubmit={handleSubmit}>
          <h3 className="form-title">Send a Message</h3>

          <div className="form-group">
            <label className="form-label">Your Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Anil Kumar"
              className="form-input"
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Email Address</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="hello@example.com"
              className="form-input"
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="I'd love to discuss an opportunity..."
              className="form-input form-textarea"
              rows={5}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary form-submit">
            {sent ? "✓ Message Sent!" : "Send Message →"}
          </button>
        </form>
      </div>
    </div>
  );
}
