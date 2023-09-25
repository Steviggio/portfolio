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
    <div className="flex flex-col items-center w-fit h-fit mx-2">
      <h4 className="mb-3 mx-2 text-lg font-semibold italic font-Libre-franklin py-1">{skillInfo.name}</h4>
      <ul className="flex gap-2">
        <div>
          <li className="w-20 h-20 rounded-full flex justify-center items-center m-1 pb-1">
            <img className="rounded-lg " src={skillInfo.icon} alt={`${name} logo`} />
          </li>
        </div>
      </ul>
    </div>
  )
}

export default SkillsList;
