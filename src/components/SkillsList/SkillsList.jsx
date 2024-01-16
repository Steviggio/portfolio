import { masteredTools } from "../../Data/skills";
import React from "react";

const skillsByName = {};
masteredTools.forEach((skill) => {
  skillsByName[skill.name] = skill;
})

const SkillsList = ({ name }) => {

  const skillName = name
  const skillInfo = skillsByName[skillName]


  if (!skillInfo) {
    return <div>Skill non trouvé</div>
  }

  return (
    <div className="flex flex-col items-center h-fit mx-1 skill">
      <ul >
          <li className="w-12 h-12 md:w-14 md:h-14 rounded-full flex justify-center items-center m-1 pt-1">
            <img className="rounded-lg " src={skillInfo.icon} alt={`${name} logo`} />
          </li>
      </ul>
      <h4 className="mb-1 mx-2 text-base font-semibold italic font-Libre-franklin py-1 hover:opacity-100">{skillInfo.name}</h4>
    </div>
  )
}

export default SkillsList;
