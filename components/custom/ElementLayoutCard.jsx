import React from "react";

const ElementLayoutCard = ({ layout }) => {
  return (
    <div
      className="cursor-pointer text-primary flex flex-col items-center justify-center 
               border border-primary border-dashed rounded-xl p-3 
               transition-transform duration-300 ease-in-out transform 
               hover:scale-105 hover:shadow-slate-400 hover:shadow-md 
               bg-white/10 backdrop-blur-sm"
    >
      {layout.icon && <layout.icon />}
      <h2 className="text-xs text-white">{layout.label}</h2>
    </div>
  );
};

export default ElementLayoutCard;
