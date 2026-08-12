import "./Footer.css";
import { contacts } from "../data/data";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">

  {/* Full-width divider */}
  <div className="footer-divider"></div>

  <div className="footer-container">

    <div className="footer-content">

      <p className="footer-copyright">
        © {currentYear} Divyashree Mallarapu
      </p>

      <div className="footer-links">
        {contacts.map((contact) => (
          <a
            key={contact.id}
            href={contact.url}
            target={
              contact.url.startsWith("mailto:")
                ? "_self"
                : "_blank"
            }
            rel="noopener noreferrer"
            className="footer-link"
            aria-label={contact.name}
            title={contact.name}
          >
            {contact.icon === "mail" && "✉"}
            {contact.icon === "linkedin" && "in"}
            {contact.icon === "github" && "◇"}
            {contact.icon === "leetcode" && "</>"}
            {contact.icon === "hackerrank" && ">_"}
            {contact.icon === "book" && "▣"}
          </a>
        ))}
      </div>

      <p className="footer-built">
        Built with React.js
      </p>

    </div>

    <a
      href="#home"
      className="back-to-top"
      aria-label="Back to top"
      title="Back to top"
    >
      ↑
    </a>

  </div>

</footer>
  );
};

export default Footer;