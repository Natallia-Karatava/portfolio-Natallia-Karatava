// src/components/Skills.js
import React from "react";
import {
  FaJs,
  FaReact,
  FaFigma,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";
import { SiTypescript, SiTailwindcss } from "react-icons/si";

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-gray-100 text-gray-800 py-10 text-center"
    >
      <h2 className="text-4xl font-semibold mb-12">My Skills</h2>
      <div className="flex justify-center gap-12 flex-wrap">
        <SkillIcon icon={<FaJs />} label="JavaScript" />
        <SkillIcon icon={<SiTypescript />} label="TypeScript" />
        <SkillIcon icon={<FaReact />} label="React" />
        <SkillIcon icon={<SiTailwindcss />} label="Tailwind CSS" />
        <SkillIcon icon={<FaFigma />} label="Figma" />
        <SkillIcon icon={<FaHtml5 />} label="HTML" />
        <SkillIcon icon={<FaCss3Alt />} label="CSS" />
        <SkillIcon icon={<FaGithub />} label="Git" />
        <SkillIcon icon={<FaNodeJs />} label="Node.js" />
      </div>
    </section>
  );
};

const SkillIcon = ({ icon, label }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="text-gray-800 bg-white p-6 rounded-2xl shadow-lg text-6xl">
        {icon}
      </div>
      <p className="mt-3 text-lg font-medium">{label}</p>
    </div>
  );
};

export default Skills;
