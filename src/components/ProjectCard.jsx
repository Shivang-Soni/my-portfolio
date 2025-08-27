import React from "react";
import { ExternalLink } from "lucide-react"; // optional: für Icon

const ProjectCard = ({ title, desc, tech, link }) => {
  return (
    <div className="z-10 shadow-cyan-400/20 bg-black/60 p-6 rounded-3xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100">
      {/* Titel */}
      <h4 className="text-xl font-bold mb-3 text-white ">{title}</h4>

      {/* Beschreibung */}
      <p className="text-gray-200 mb-3 leading-relaxed text-left">{desc}</p>

      {/* Tech-Stack */}
      <p className="text-sm text-sky-300 mb-4 italic bold">{tech}</p>

      {/* Link */}
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sky-300 font-medium hover:text-sky-600 transition-colors z-50 relative pt-3"
        >
          Details <ExternalLink size={14} />
        </a>
      )}
    </div>
  );
};

export default ProjectCard;
