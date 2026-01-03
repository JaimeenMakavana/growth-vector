import Link from "next/link";
import { Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="text-center py-lg text-gray-400 text-sm font-montserrat font-medium border-t border-gray-100">
      <div className="flex flex-col items-center gap-md">
        <div>
          © 2025 Growth Vector. Crafted with{" "}
          <span className="text-rose-500">♥</span> for ambitious companies.
        </div>
        <Link
          href="https://github.com/JaimeenMakavana/growth-vector"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-sm text-gray-400 hover:text-rose-600 transition-colors group"
          aria-label="View source code on GitHub"
        >
          <Github
            className="w-4 h-4 group-hover:scale-110 transition-transform"
            strokeWidth={2}
          />
          <span>Source Code</span>
        </Link>
      </div>
    </footer>
  );
}
