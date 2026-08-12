import "./Hero.css";
import profileImage from "../assets/Profile.jpeg";
import resume from "../assets/Resume.pdf";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-container">

        {/* LEFT SIDE */}
        <div className="hero-content">

          <div className="availability">
            <span className="availability-dot"></span>
            Open to Opportunities
          </div>

          <p className="hero-greeting">
            Hi, I'm Divyashree Mallarapu
          </p>

          <h1 className="hero-title">
            <span>AI/ML Engineer</span>
            <br />
            & Full-Stack
            <br />
            Developer
          </h1>

          <p className="hero-description">
            I build intelligent, scalable, and user-focused applications by
            combining Artificial Intelligence, Machine Learning, and modern
            web technologies.
          </p>

          {/* ACTION BUTTONS */}
          <div className="hero-actions">

            <a href="#projects" className="btn btn-primary">
              View My Projects
              <span>→</span>
            </a>

            <a href="#contact" className="btn btn-secondary">
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

          {/* SOCIAL LINKS */}
          <div className="hero-socials">

            <a
              href="https://github.com/divyam5858"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>◌</span>
              GitHub
            </a>

            <a
              href="https://in.linkedin.com/in/divyashree-mallarapu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>in</span>
              LinkedIn
            </a>

            <a
              href="https://www.amazon.com/author/divyashree-mallarapu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>A</span>
              Amazon-Author
            </a>

            <a
              href="https://leetcode.com/u/Divyashree-Mallarapu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>&lt;/&gt;</span>
              LeetCode
            </a>

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

        {/* RIGHT SIDE */}
        <div className="hero-visual">

          <div className="hero-photo-card">

            <div className="photo-glow"></div>

            <div className="photo-ring">
              <img
                src={profileImage}
                alt="Divyashree Mallarapu"
                className="hero-photo"
              />
            </div>

            <div className="photo-badge">
              <span className="badge-dot"></span>
              AI/ML Engineer
            </div>

          </div>

          {/* TECHNOLOGY BADGES */}
          <div className="tech-badges">
            <span>Python</span>
            <span>React</span>
            <span>ML</span>
            <span>JavaScript</span>
            <span>Node.js</span>
            <span>MongoDB</span>
            <span>AI</span>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;