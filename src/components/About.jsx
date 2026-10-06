import "./About.css";

const highlights = [
  {
    title: "Software Engineer",
    value: "Sulopa Technologies",
  },
  {
    title: "AI/ML Background",
    value: "Vision & Applied ML",
  },
  {
    title: "Full-Stack Developer",
    value: "React · Node · MongoDB",
  },
  {
    title: "Published Author",
    value: "2 technical books",
  },
  {
    title: "DSA Practitioner",
    value: "LeetCode · HackerRank",
  },
  {
    title: "Engineering Focus",
    value: "AI · Web · Software",
  },
];

const interests = [
  "Artificial Intelligence",
  "Machine Learning",
  "Computer Vision",
  "Full-Stack Development",
  "Data Structures & Algorithms",
  "Software Engineering",
];

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">

        {/* =========================
            SECTION HEADING
        ========================= */}

        <div className="about-heading">
          <p className="about-label">01 — ABOUT</p>

          <h2>
            Engineering intelligent products, end to end
          </h2>
        </div>


        {/* =========================
            MAIN CONTENT
        ========================= */}

        <div className="about-grid">

          {/* =========================
              LEFT CONTENT
          ========================= */}

          <div className="about-content">

            <p>
              I'm a Software Engineer at Sulopa Technologies Pvt. Ltd.,
              with a background in Artificial Intelligence & Machine Learning
              and full-stack development.
            </p>

            <p>
              My engineering experience spans computer vision pipelines,
              machine learning applications, and production-ready web
              applications. I enjoy building reliable software by combining
              intelligent systems with clean, practical engineering.
            </p>

            <p>
              Alongside software engineering, I have published technical
              books on Compiler Design and Data Structures & Algorithms,
              practise problem solving and DSA, and continue to explore
              AI/ML and modern full-stack technologies.
            </p>


            {/* =========================
                INTERESTS
            ========================= */}

            <div className="interests">
              <h3>INTERESTS</h3>

              <div className="interest-list">
                {interests.map((interest) => (
                  <span
                    key={interest}
                    className="interest-tag"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

          </div>


          {/* =========================
              RIGHT HIGHLIGHTS CARD
          ========================= */}

          <div className="highlights-card">

            <div className="highlights-header">
              <span className="highlights-icon">✣</span>
              <span>HIGHLIGHTS</span>
            </div>

            <div className="highlights-list">

              {highlights.map((item) => (
                <div
                  className="highlight-row"
                  key={item.title}
                >
                  <span className="highlight-title">
                    {item.title}
                  </span>

                  <span className="highlight-value">
                    {item.value}
                  </span>
                </div>
              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
