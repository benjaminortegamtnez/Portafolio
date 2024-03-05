import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-[#FECA01] border-[#FECA01] bg-[#0f0f0f]"
    : "text-[#ADB7BE] hover:text-white border-slate-600 hover:border-white bg-[#0f0f0f]";
  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
