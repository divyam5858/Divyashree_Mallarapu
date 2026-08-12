import "./ProjectCard.css";

const ProjectCard = ({ project, featured }) => {

  const visibleTechnologies = project.technologies.slice(0, 6);

  const remainingTechnologies =
    project.technologies.length - visibleTechnologies.length;

  return (
    <article
      className={`project-card ${
        featured ? "project-card-featured" : ""
      }`}
    >

      {/* =========================
          CARD HEADER
      ========================= */}

      <div className="project-card-header">

        <div className="project-title-wrapper">

          <h3 className="project-title">
            {project.title}
          </h3>

        </div>


        <div className="project-category">
          {project.category}
        </div>

      </div>


      {/* =========================
          FEATURED BADGE
      ========================= */}

      {featured && (
        <span className="project-featured-badge">
          ✦ Featured
        </span>
      )}


      {/* =========================
          DESCRIPTION
      ========================= */}

      <p className="project-description">
        {project.description}
      </p>


      {/* =========================
          TECHNOLOGIES
      ========================= */}

      <div className="project-technologies">

        {visibleTechnologies.map((technology) => (

          <span
            className="project-tech"
            key={technology}
          >
            {technology}
          </span>

        ))}


        {remainingTechnologies > 0 && (
          <span className="project-tech project-tech-more">
            +{remainingTechnologies}
          </span>
        )}

      </div>


      {/* =========================
          DIVIDER
      ========================= */}

      <div className="project-divider"></div>


      {/* =========================
          CARD ACTIONS
      ========================= */}

      <div className="project-actions">

        <div className="project-links">

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link github-link"
            >
              <span>⌘</span>
              GitHub
            </a>
          )}


          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link live-link"
            >
              <span>↗</span>
              Live Demo
            </a>
          )}

        </div>


        <button
          className="project-details"
          type="button"
        >
          View Details
          <span>⌄</span>
        </button>

      </div>

    </article>
  );
};

export default ProjectCard;