import React from "react";
import "./IconTech.css";

const IconDict = {
  angular: "icons/angular.svg",
  android: "icons/android.svg",
  "android studio": "icons/androidstudio.svg",
  astro: "icons/astro.svg",
  express: "icons/express.svg",
  dotnet: "icons/dotnet.svg",
  mongodb: "icons/mongodb.svg",
  "sql server": "icons/sqlserver.svg",
  tailwind: "icons/tailwindcss.svg",
  javascript: "icons/javascript.svg",
  css: "icons/css3.svg",
  html: "icons/html5.svg",
  react: "icons/react.svg",
  nodejs: "icons/nodejs.svg",
  xamarin: "icons/xamarin.svg",
  xaml: "icons/xaml.svg",
  "visual Studio": "icons/visualstudio.svg",
  "vs code": "icons/visualstudiocode.svg",
  git: "icons/git.svg",
  nuget: "icons/nuget.svg",
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
