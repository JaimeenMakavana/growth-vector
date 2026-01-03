"use client";

import { skills } from "../data/skills";
import SkillCard from "./SkillCard";

export default function SkillsSection() {
  const skillsByCategory = skills.reduce(
    (acc, skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = [];
      }
      acc[skill.category].push(skill);
      return acc;
    },
    {} as Record<string, typeof skills>,
  );

  const categories = Object.keys(skillsByCategory);

  return (
    <section
      className="mb-2xl md:mb-4xl"
      aria-label="Skills Demonstrated"
      id="skills"
    >
      <div className="mb-2xl md:mb-3xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-montserrat font-semibold text-gray-900 mb-md">
          Skills Demonstrated
        </h2>
        <p className="text-lg text-gray-600 font-montserrat">
          Technical competencies and expertise showcased throughout this project,
          from frontend development to performance optimization.
        </p>
      </div>

      {categories.map((category) => (
        <div key={category} className="mb-2xl md:mb-3xl">
          <h3 className="text-xl md:text-2xl font-montserrat font-semibold text-gray-800 mb-lg">
            {category}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md md:gap-xl">
            {skillsByCategory[category].map((skill, index) => (
              <SkillCard key={skill.id} skill={skill} index={index} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

