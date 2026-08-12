import "./Experience.css";
import { experience } from "../data/data";

const Experience = () => {
  return (
    <section className="experience" id="experience">
      <div className="experience-container">

        {/* SECTION HEADING */}
        <div className="experience-heading">
          <p className="experience-label">03 — EXPERIENCE</p>

          <h2>Where I've built and shipped</h2>

          <p className="experience-subtitle">
            Applied AI work in industry plus structured full-stack
            engineering training.
          </p>
        </div>


        {/* EXPERIENCE TIMELINE */}
        <div className="experience-list">

          {experience.map((item) => (
            <article
              className="experience-card"
              key={item.id}
            >

              {/* TIMELINE ICON */}
              <div className="experience-icon">
                💼
              </div>


              {/* CARD HEADER */}
              <div className="experience-header">

                <div className="experience-role">

                  <h3>{item.role}</h3>

                  <p className="experience-company">
                    {item.company}
                  </p>

                </div>


                <div className="experience-meta">

                  <span className="experience-duration">
                    {item.duration}
                  </span>

                  <span className="experience-type">
                    {item.type}
                  </span>

                </div>

              </div>


              {/* RESPONSIBILITIES */}
              <ul className="experience-responsibilities">

                {item.responsibilities.map(
                  (responsibility, index) => (
                    <li key={index}>
                      {responsibility}
                    </li>
                  )
                )}

              </ul>


              {/* DIVIDER */}
              <div className="experience-divider"></div>


              {/* TECHNOLOGIES */}
              <div className="experience-technologies">

                {item.technologies.map((technology) => (
                  <span key={technology}>
                    {technology}
                  </span>
                ))}

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Experience;