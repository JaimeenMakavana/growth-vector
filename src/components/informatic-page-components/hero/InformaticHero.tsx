import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";

export default function InformaticHero() {
  return (
    <div className="text-center mb-2xl md:mb-4xl">
      <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-tight text-gray-900 font-medium mb-6 md:mb-8">
        <span className="font-serif">Project</span>{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-orange-500 font-sans">
          Informatics
        </span>
      </h1>
      <p className="text-lg md:text-xl lg:text-2xl text-gray-500 leading-relaxed font-montserrat font-medium mb-6 md:mb-8">
        A comprehensive showcase of the skills, tools, and performance
        achievements demonstrated in this project. Built with modern web
        technologies and optimized for speed, accessibility, and user
        experience.
      </p>
      <Link
        href="https://github.com/JaimeenMakavana/growth-vector"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-sm bg-gray-900 text-white px-xl py-md rounded-full hover:bg-rose-600 hover:shadow-lg transition-all font-montserrat font-medium group"
      >
        <Github
          className="w-5 h-5 group-hover:scale-110 transition-transform"
          strokeWidth={2}
        />
        <span>View on GitHub</span>
        <ExternalLink
          className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
          strokeWidth={2}
        />
      </Link>
    </div>
  );
}
