import React from "react";

const SkillBar = ({ skill, percent }) => {
  return (
    <div className="mb-6">
      {/* Skill + Prozentanzeige */}
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-100">{skill}</span>
        <span className="text-sm font-semibold text-white">{percent}%</span>
      </div>

      {/* Hintergrundbalken */}
      <div className="w-full bg-gray-200 h-4 rounded-lg overflow-hidden shadow-inner">
        {/* Fortschritt */}
        <div
          className="bg-gradient-to-r from-[rgb(255,215,0)] to-[rgb(255,193,7)] h-4 rounded-lg transition-all duration-700 ease-out"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
};

export default SkillBar;
