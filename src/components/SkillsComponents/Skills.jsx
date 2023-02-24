import { useState, useEffect } from "react";

import SkillCard from "./SkillCard.jsx";
import "./Skills.css";

import { dataSkills } from "../../config/config";
import hacktext from "../../utils/hacktextEffect.js";
const { skills } = dataSkills;

export const SkillsComponent = () => {
  const [selectedCard, setSelectedCard] = useState(skills[0].id);
  const [showAllCards, setShowAllCards] = useState(false);
  const [flagExecuteCode, setFlagExecuteCode] = useState(false);

  const handleButtonClick = (skillId) => {
    setSelectedCard(skillId);
  };

  const showInfoCard = (skillId) => {
    if (!showAllCards) return;

    if (skillId !== selectedCard) {
      setSelectedCard(skillId);
    } else {
      setSelectedCard("");
    }
  };

  const handleResize = () => {
    if (window.innerWidth < 1024 && !flagExecuteCode) {
      setShowAllCards(true);
      setSelectedCard("");
      setFlagExecuteCode(true);
    }
    if (window.innerWidth >= 1024 && flagExecuteCode) {
      setShowAllCards(false);
      setSelectedCard(skills[0].id);
      setFlagExecuteCode(false);
    }
  };

  useEffect(() => {
    handleResize();
    hacktext();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [flagExecuteCode]);

  return (
    <section
      id="Habilidades"
      className="skills-reveal flex flex-col gap-y-10 w-full"
    >
      <div className="flex flex-col px-5 md:px-0 gap-y-2">
        <h1
          data-value="HABILIDADES"
          className="hacktext text-white text-5xl text-center md:text-start"
        >
          HABILIDADES
        </h1>
        <hr />
      </div>

      <div className="flex flex-row gap-x-24 gap-y-5 py-5 px-0 lg:px-20 justify-center items-center lg:items-start">
        <div className="hidden lg:flex flex-col items-start text-white w-[20rem]">
          {skills.map((skill) => {
            return (
              <button
                key={skill.id}
                onClick={() => handleButtonClick(skill.id)}
                data-value={skill.skillName}
                className={
                  (selectedCard === skill.id
                    ? "skill-button-activate"
                    : "skill-button-disable") +
                  " button-skill font-mono hacktext_click_effect"
                }
              >
                {skill.skillName}
              </button>
            );
          })}
        </div>
        <div className="flex flex-col w-full px-10 gap-y-5">
          {skills.map((skill) => {
            return (
              <SkillCard
                key={skill.id}
                skill={skill}
                active={selectedCard === skill.id || showAllCards}
                buttonClick={showInfoCard}
                showInfo={selectedCard === skill.id}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsComponent;
