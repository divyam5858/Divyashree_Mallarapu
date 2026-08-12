import "./Publications.css";
import { publications } from "../data/data";

const Publications = () => {
  return (
    <section className="publications" id="publications">
      <div className="publications-container">

        {/* =========================
            SECTION HEADING
        ========================= */}

        <div className="publications-heading">
          <p className="publications-label">
            07 — PUBLICATIONS
          </p>

          <h2>
            Published technical books
          </h2>

          <p className="publications-subtitle">
            Writing that turns dense computer science topics into
            approachable, structured learning paths.
          </p>
        </div>


        {/* =========================
            PUBLICATIONS LIST
        ========================= */}

        <div className="publications-list">

          {publications.map((publication) => (

            <article
              className={`publication-card ${
                publication.status === "Coming Soon"
                  ? "publication-coming-soon"
                  : ""
              }`}
              key={publication.id}
            >

              {/* =========================
                  BOOK COVER
              ========================= */}

              <div className="publication-cover">

                <div className="publication-book-icon">
                  ▣
                </div>

                <div className="publication-cover-title">
                  {publication.title}
                </div>

              </div>


              {/* =========================
                  CONTENT
              ========================= */}

              <div className="publication-content">

                {/* =========================
                    META
                ========================= */}

                <div className="publication-meta">

                  <span className="publication-type">
                    {publication.type}
                  </span>

                  <span className="publication-year">
                    {publication.year}
                  </span>

                  <span className="publication-role">
                    {publication.role}
                  </span>

                  {publication.status && (
                    <span className="publication-status">
                      {publication.status}
                    </span>
                  )}

                </div>


                {/* =========================
                    TITLE
                ========================= */}

                <h3 className="publication-title">
                  {publication.title}
                </h3>


                {/* =========================
                    DESCRIPTION
                ========================= */}

                <p className="publication-description">
                  {publication.description}
                </p>


                {/* =========================
                    BOOK LINKS
                ========================= */}

                <div className="publication-actions">

                  {publication.status === "Published" &&
                    publication.links?.map((link) => (
                      <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="publication-link"
                      >
                        {link.name}
                        <span>↗</span>
                      </a>
                    ))
                  }


                  {/* =========================
                      COMING SOON
                  ========================= */}

                  {publication.status === "Coming Soon" && (
                    <span className="publication-coming-text">
                      Coming Soon
                    </span>
                  )}

                </div>

              </div>

            </article>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Publications;