import React from "react";
import "./IconTech.css";

const IconDict = {
  angular: "icons/angular.svg",
  astro: "icons/astro.svg",
  tailwind: "icons/tailwindcss.svg",
  javascript: "icons/javascript.svg",
  css: "icons/css3.svg",
  html: "icons/html5.svg",
  react: "icons/react.svg",
};

export const IconTechComponent = ({ tech, classes }) => {
  const component = IconDict[tech];

  return (
    <div className="relative">
      <img
        src={component}
        alt={tech}
        className={`${classes} tooltip-reciever`}
      />
      <div className="tooltip uppercase text-sm font-Rubik px-2 bg-slate-300 rounded whitespace-nowrap">
        {tech}
      </div>
    </div>
  );
};

export default IconTechComponent;
