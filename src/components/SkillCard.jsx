import IconTech from "./IconTech.jsx";

export const SkillCardComponent = ({
  skill,
  active,
  buttonClick,
  showInfo,
}) => {
  return (
    <div
      id={skill.id}
      className={
        (active ? "flex" : "hidden") +
        " skill-card flex-col justify-between gap-y-10 bg-slate-800 p-7 lg:p-10 rounded-3xl"
      }
    >
      <div className="flex flex-col gap-y-10">
        <div className="flex flex-row justify-between">
          <h1 className="text-white text-base sm:text-xl lg:text-4xl font-LexendDeca text-start">
            {skill.skillName}
          </h1>
          <button
            onClick={() => buttonClick(skill.id)}
            className="inline lg:hidden text-white"
          >
            <img className="w-6" src="icons/arrow_down.svg" alt="" />
          </button>
        </div>
        <p
          className={
            (showInfo ? "inline" : "hidden") +
            " font-Rubik text-white text-justify mx-auto text-base lg:text-start lg:mx-0 xl:text-xl"
          }
        >
          {skill.text}
        </p>
      </div>
      <div
        className={
          (showInfo ? "flex" : "hidden") +
          " items-center justify-center gap-x-6"
        }
      >
        {skill.techIcons.map((tech, index) => {
          return (
            <IconTech key={index} classes="w-7 md:w-10 lg:w-16" tech={tech} />
          );
        })}
      </div>
    </div>
  );
};

export default SkillCardComponent;
