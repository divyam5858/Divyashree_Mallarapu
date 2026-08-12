import "./About.css";

const highlights = [
  {
    title: "AI/ML Engineer",
    value: "Vision & Applied ML",
  },
  {
    title: "MERN Stack Developer",
    value: "React · Node · Mongo",
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
    title: "Final Year Project",
    value: "NeuroSense platform",
  },
  {
    title: "Availability",
    value: "Open to Software/AI roles",
  },
];

const interests = [
  "Artificial Intelligence",
  "Machine Learning",
  "Computer Vision",
  "Full-Stack Development",
  "Data Structures & Algorithms",
  "Developer Tools",
];

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">

        {/* SECTION HEADING */}
        <div className="about-heading">
          <p className="about-label">01 — ABOUT</p>

          <h2>
            Engineering intelligent products, end to
            
            end
          </h2>
        </div>

        {/* MAIN CONTENT */}
        <div className="about-grid">

          {/* LEFT CONTENT */}
          <div className="about-content">

            <p>
              I'm an AI/ML Engineer and full-stack developer in my final year
              of Artificial Intelligence & Machine Learning, focused on turning
              research-grade models into products people can actually use.
            </p>

            <p>
              My work spans computer vision pipelines, explainable machine
              learning for healthcare, and production MERN applications. I
              care about clean architecture, measurable model quality, and
              interfaces that make complex systems feel simple.
            </p>

            <p>
              Alongside engineering, I write technical books, practise data
              structures and algorithms daily, and mentor peers through
              hackathons and developer workshops.
            </p>

            {/* INTERESTS */}
            <div className="interests">
              <h3>INTERESTS</h3>

              <div className="interest-list">
                {interests.map((interest) => (
                  <span key={interest} className="interest-tag">
                    {interest}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT HIGHLIGHTS CARD */}
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