import { useState } from "react";
import "./Projects.css";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/data";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = [
    "All",
    "AI/ML",
    "Full Stack",
    "Frontend",
    "Other",
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : activeFilter === "Other"
      ? projects.filter(
          (project) =>
            !["AI/ML", "Full Stack", "Frontend"].includes(
              project.category
            )
        )
      : projects.filter(
          (project) => project.category === activeFilter
        );

  return (
    <section className="projects" id="projects">
      <div className="projects-container">

        {/* =========================
            SECTION HEADING
        ========================= */}

        <div className="projects-heading">

          <p className="projects-label">
            05 — PROJECTS
          </p>

          <h2>
            Selected work
          </h2>

          <p className="projects-subtitle">
            Applied AI systems and production web applications, from
            research prototypes to shipped products.
          </p>

        </div>


        {/* =========================
            FILTERS
        ========================= */}

        <div className="project-filters">

          {filters.map((filter) => (
            <button
              key={filter}
              className={`project-filter ${
                activeFilter === filter
                  ? "project-filter-active"
                  : ""
              }`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}

        </div>


        {/* =========================
            PROJECT GRID
        ========================= */}

        <div className="projects-grid">

          {filteredProjects.length > 0 ? (

            filteredProjects.map((project, index) => (

              <ProjectCard
                key={project.id}
                project={project}
                featured={
                  activeFilter === "All" && index === 0
                }
              />

            ))

          ) : (

            <div className="no-projects">
              No projects found in this category.
            </div>

          )}

        </div>

      </div>
    </section>
  );
};

export default Projects;