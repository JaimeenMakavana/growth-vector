"use client";

import { motion } from "framer-motion";
import type { Skill } from "../types";

interface SkillCardProps {
  skill: Skill;
  index: number;
}

const levelColors = {
  Expert: "bg-emerald-100 text-emerald-700 border-emerald-200",
  Advanced: "bg-blue-100 text-blue-700 border-blue-200",
  Proficient: "bg-purple-100 text-purple-700 border-purple-200",
  Intermediate: "bg-gray-100 text-gray-700 border-gray-200",
};

export default function SkillCard({ skill, index }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="bg-white rounded-xl border border-gray-200 p-xl md:p-2xl shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="flex justify-between items-start mb-md">
        <h3 className="text-xl md:text-2xl font-montserrat font-semibold text-gray-900">
          {skill.name}
        </h3>
        <span
          className={`px-md py-xs rounded-full text-xs font-montserrat font-medium border ${levelColors[skill.level]}`}
        >
          {skill.level}
        </span>
      </div>
      <p className="text-sm text-gray-500 font-montserrat mb-sm">
        {skill.category}
      </p>
      <p className="text-gray-600 font-montserrat text-sm md:text-base leading-relaxed">
        {skill.description}
      </p>
    </motion.div>
  );
}

