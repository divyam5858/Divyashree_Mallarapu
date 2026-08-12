import "./Achievements.css";
import { achievements } from "../data/data";

import {
  Award,
  BookOpen,
  Users,
  Terminal,
} from "lucide-react";


const iconMap = {
  award: Award,
  book: BookOpen,
  users: Users,
  terminal: Terminal,
};


const Achievements = () => {
  return (
    <section className="achievements" id="achievements">

      <div className="achievements-container">

        {/* =========================
            SECTION HEADING
        ========================= */}

        <div className="achievements-heading">

          <p className="achievements-label">
            08 — ACHIEVEMENTS
          </p>

          <h2>
            Recognition & community
          </h2>

        </div>


        {/* =========================
            ACHIEVEMENTS GRID
        ========================= */}

        <div className="achievements-grid">

          {achievements.map((achievement) => {

            const Icon = iconMap[achievement.icon];

            return (
              <article
                className="achievement-card"
                key={achievement.id}
              >

                {/* ICON */}

                <div className="achievement-icon">
                  {Icon && <Icon size={16} strokeWidth={1.8} />}
                </div>


                {/* CONTENT */}

                <div className="achievement-content">

                  <h3 className="achievement-title">
                    {achievement.title}
                  </h3>

                  <p className="achievement-description">
                    {achievement.description}
                  </p>

                </div>

              </article>
            );

          })}

        </div>

      </div>

    </section>
  );
};


export default Achievements;