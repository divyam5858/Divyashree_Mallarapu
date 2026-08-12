import "./Skills.css";
import { skills } from "../data/data";

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="skills-container">

        {/* SECTION HEADING */}
        <div className="skills-heading">

          <p className="skills-label">
            04 — SKILLS
          </p>

          <h2>
            Technologies I work with
          </h2>

          <p className="skills-subtitle">
            A working toolkit across machine learning, web engineering and
            deployment.
          </p>

        </div>


        {/* SKILLS GRID */}
        <div className="skills-grid">

          {skills.map((skillGroup) => (

            <article
              className={`skill-card ${
                skillGroup.highlight
                  ? "skill-card-highlight"
                  : ""
              }`}
              key={skillGroup.category}
            >

              {/* CATEGORY */}
              <h3 className="skill-category">
                {skillGroup.category}
              </h3>


              {/* TECHNOLOGIES */}
              <div className="skill-tags">

                {skillGroup.skills.map((skill) => (

                  <span
                    className="skill-tag"
                    key={skill}
                  >
                    {skill}
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

export default Skills;