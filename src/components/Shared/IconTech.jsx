import React from "react";
import "./IconTech.css";

const IconDict = {
  "android studio": "icons/androidstudio.svg",
  "sql server": "icons/sqlserver.svg",
  "visual Studio": "icons/visualstudio.svg",
  "vs code": "icons/visualstudiocode.svg",
  android: "icons/android.svg",
  angular: "icons/angular.svg",
  astro: "icons/astro.svg",
  css: "icons/css3.svg",
  dotnet: "icons/dotnet.svg",
  express: "icons/express.svg",
  git: "icons/git.svg",
  html: "icons/html5.svg",
  javascript: "icons/javascript.svg",
  mongodb: "icons/mongodb.svg",
  nodejs: "icons/nodejs.svg",
  npm: "icons/npm.svg",
  nuget: "icons/nuget.svg",
  photoshop: "icons/ps.svg",
  react: "icons/react.svg",
  tailwind: "icons/tailwindcss.svg",
  xamarin: "icons/xamarin.svg",
  xaml: "icons/xaml.svg",
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
