import IconTech from "./IconTech.jsx";
import "./SkillCard.css";

export const SkillCardComponent = ({
  skill,
  active,
  buttonClick,
  showInfo,
}) => {
  return (
    <div className={(active ? "flex" : "hidden") + " flex flex-col"}>
      <div
        className={
          (showInfo ? "rounded-t-3xl" : "rounded-3xl") +
          " flex justify-between bg-slate-800 px-7 lg:px-10 py-5 cursor-pointer"
        }
        onClick={() => buttonClick(skill.id)}
      >
        <h1 className="text-white text-base sm:text-xl lg:text-3xl font-LexendDeca font-bold text-start">
          {skill.skillName}
        </h1>
        <img
          className={(showInfo ? "-rotate-90" : "") + " inline lg:hidden w-6"}
          src="icons/arrow_down.svg"
          alt=""
        />
      </div>

      <div
        className={
          (showInfo ? "expand" : "") +
          " expandable-text  bg-slate-800 rounded-b-3xl "
        }
      >
        <div
          className={
            (showInfo ? "block" : "hidden") +
            " flex flex-col gap-y-10 px-7 lg:px-10"
          }
        >
          <p
            className={
              " font-Rubik text-white text-justify mx-auto text-base lg:text-start lg:mx-0 xl:text-xl pt-5"
            }
          >
            {skill.text}
          </p>
          <div className={"flex items-center justify-center gap-x-6 pb-10"}>
            {skill.techIcons.map((tech, index) => {
              return (
                <IconTech
                  key={index}
                  classes="w-7 md:w-10 lg:w-16"
                  tech={tech}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillCardComponent;
