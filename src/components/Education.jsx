import "./Education.css";
import { education } from "../data/data";

const Education = () => {
  return (
    <section className="education" id="education">
      <div className="education-container">

        {/* SECTION HEADING */}
        <div className="education-heading">
          <p className="education-label">02 — EDUCATION</p>

          <h2>Academic background</h2>
        </div>

        {/* EDUCATION TIMELINE */}
        <div className="education-list">

          {education.map((item) => (
            <article
              className="education-card"
              key={item.id}
            >

              {/* TIMELINE ICON */}
              <div className="education-icon">
                🎓
              </div>

              {/* DEGREE + CGPA */}
              <div className="education-card-header">

                <div>
                  <h3>{item.degree}</h3>

                  <p className="education-institution">
                    {item.institution}
                  </p>
                </div>

                {item.cgpa && (
                  <span className="education-cgpa">
                    {item.cgpa} 
                  </span>
                )}

              </div>


              {/* DETAILS */}
              <div className="education-details">

                <div className="education-detail">
                  <span className="detail-label">
                    UNIVERSITY
                  </span>

                  <span className="detail-value">
                    {item.university}
                  </span>
                </div>


                <div className="education-detail">
                  <span className="detail-label">
                    PERIOD
                  </span>

                  <span className="detail-value">
                    {item.period}
                  </span>
                </div>


                <div className="education-detail">
                  <span className="detail-label">
                    GRADUATION
                  </span>

                  <span className="detail-value">
                    {item.graduation}
                  </span>
                </div>

              </div>


              {/* DIVIDER */}
              <div className="education-divider"></div>


              {/* HIGHLIGHTS */}
              {item.highlights && item.highlights.length > 0 && (
                <ul className="education-highlights">

                  {item.highlights.map((highlight, index) => (
                    <li key={index}>
                      {highlight}
                    </li>
                  ))}

                </ul>
              )}

            </article>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Education;