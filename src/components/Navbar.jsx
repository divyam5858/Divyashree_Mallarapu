import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">

        <a href="#home" className="navbar-brand">
          <span className="brand-logo">DM</span>
          <span className="brand-name">Divyashree Mallarapu</span>
        </a>

        <div className="navbar-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#certifications">Certifications</a>
          <a href="#publications">Publications</a>
          <a href="#contact">Contact</a>
        </div>

        <a href="#contact" className="hire-button">
          Hire me
        </a>

      </div>
    </nav>
  );
};

export default Navbar;