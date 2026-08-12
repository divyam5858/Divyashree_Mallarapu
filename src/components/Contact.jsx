
import "./Contact.css";
import { contacts } from "../data/data";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">

        {/* =========================
            SECTION HEADING
        ========================= */}

        <div className="contact-heading">
          <p className="contact-label">
            09 — CONTACT
          </p>

          <h2>
            Let's Build Something Together
          </h2>

          <p className="contact-subtitle">
            I'm open to opportunities in AI/ML, software development,
            and full-stack engineering.
          </p>
        </div>


        {/* =========================
            CONTACT GRID
        ========================= */}

        <div className="contact-grid">

          {/* =========================
              LEFT SIDE
          ========================= */}

          <div className="contact-info">

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
                className="contact-card"
              >

                <div className="contact-card-icon">
                  {contact.icon === "mail" && "✉"}
                  {contact.icon === "linkedin" && "in"}
                  {contact.icon === "github" && "◇"}
                  {contact.icon === "leetcode" && "</>"}
                  {contact.icon === "hackerrank" && ">_"}
                  {contact.icon === "book" && "▣"}
                </div>

                <div className="contact-card-content">
                  <h3>{contact.name}</h3>
                  <p>{contact.value}</p>
                </div>

              </a>
            ))}

          </div>


          {/* =========================
              GOOGLE FORM
          ========================= */}

          <div className="contact-form-card">

            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSeC7x2oFQv6utUsvJ19tQYVSi6W76zUIn984H7oofDNI77wFA/viewform?usp=header"
              title="Contact Form"
              className="google-form"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
            >
              Loading…
            </iframe>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;