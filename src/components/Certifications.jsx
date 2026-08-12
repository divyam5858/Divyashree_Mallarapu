import "./Certifications.css";
import { certifications } from "../data/data";

const Certifications = () => {
  return (
    <section className="certifications" id="certifications">
      <div className="certifications-container">

        {/* =========================
            SECTION HEADING
        ========================= */}

        <div className="certifications-heading">

          <p className="certifications-label">
            06 — CERTIFICATIONS
          </p>

          <h2>
            Certifications & training
          </h2>

          <p className="certifications-subtitle">
            Formal coursework and programs backing my applied ML and
            full-stack work.
          </p>

        </div>


        {/* =========================
            CERTIFICATION GRID
        ========================= */}

        <div className="certifications-grid">

          {certifications.map((certificate) => (

            <article
              className="certification-card"
              key={certificate.id}
            >

              {/* =========================
                  TOP ROW
              ========================= */}

              <div className="certification-top">

                <div className="certification-icon">
                  ✓
                </div>

                {certificate.year && (
                  <span className="certification-year">
                    {certificate.year}
                  </span>
                )}

              </div>


              {/* =========================
                  TITLE
              ========================= */}

              <h3 className="certification-title">
                {certificate.title}
              </h3>


              {/* =========================
                  ISSUER
              ========================= */}

              <p className="certification-issuer">
                {certificate.issuer}
              </p>


              {/* =========================
                  DESCRIPTION
              ========================= */}

              <p className="certification-description">
                {certificate.description}
              </p>


              {/* =========================
                  CERTIFICATE BUTTON
              ========================= */}

              <div className="certification-footer">

                {certificate.file && (
                  <a
                    href={certificate.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="certification-document"
                  >
                    View Certificate
                    <span>↗</span>
                  </a>
                )}

              </div>

            </article>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Certifications;