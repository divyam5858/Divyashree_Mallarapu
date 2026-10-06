import "./Hero.css";
import profileImage from "../assets/Profile.jpeg";
import resume from "../assets/Resume.pdf";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-container">

        {/* =========================
            LEFT SIDE
        ========================= */}

        <div className="hero-content">

          {/* CURRENT STATUS */}
          <div className="availability">
            <span className="availability-dot"></span>
            Software Engineer at Sulopa Technologies
          </div>


          {/* GREETING */}
          <p className="hero-greeting">
            Hi, I'm Divyashree Mallarapu
          </p>


          {/* MAIN HEADING */}
          <h1 className="hero-title">
            <span>Software Engineer</span>
            <br />
            & AI/ML
            <br />
            Developer
          </h1>


          {/* DESCRIPTION */}
          <p className="hero-description">
            I build reliable, scalable, and user-focused software by combining
            full-stack engineering with Artificial Intelligence and Machine
            Learning to create practical technology solutions.
          </p>


          {/* =========================
              ACTION BUTTONS
          ========================= */}

          <div className="hero-actions">

            <a
              href="#projects"
              className="btn btn-primary"
            >
              View My Projects
              <span>→</span>
            </a>


            <a
              href="#contact"
              className="btn btn-secondary"
            >
              Contact Me
            </a>


            <a
              href={resume}
              className="resume-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>↓</span>
              Download Resume
            </a>

          </div>


          {/* =========================
              SOCIAL LINKS
          ========================= */}

          <div className="hero-socials">

            {/* GitHub */}
            <a
              href="https://github.com/divyam5858"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>◌</span>
              GitHub
            </a>


            {/* LinkedIn */}
            <a
              href="https://in.linkedin.com/in/divyashree-mallarapu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>in</span>
              LinkedIn
            </a>


            {/* Amazon Author */}
            <a
              href="https://www.amazon.com/author/divyashree-mallarapu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>A</span>
              Amazon-Author
            </a>


            {/* LeetCode */}
            <a
              href="https://leetcode.com/u/Divyashree-Mallarapu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>&lt;/&gt;</span>
              LeetCode
            </a>


            {/* HackerRank */}
            <a
              href="https://www.hackerrank.com/profile/divyamallarapu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>›_</span>
              HackerRank
            </a>

          </div>

        </div>


        {/* =========================
            RIGHT SIDE
        ========================= */}

        <div className="hero-visual">

          <div className="hero-photo-card">

            {/* GLOW */}
            <div className="photo-glow"></div>


            {/* PROFILE IMAGE */}
            <div className="photo-ring">

              <img
                src={profileImage}
                alt="Divyashree Mallarapu"
                className="hero-photo"
              />

            </div>


            {/* PROFILE BADGE */}
            <div className="photo-badge">
              <span className="badge-dot"></span>
              Software Engineer
            </div>

          </div>


          {/* =========================
              TECHNOLOGY BADGES
          ========================= */}

          <div className="tech-badges">
            <span>JavaScript</span>
            <span>React</span>
            <span>Node.js</span>
            <span>MongoDB</span>
            <span>Python</span>
            <span>AI/ML</span>
            <span>Git</span>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;
