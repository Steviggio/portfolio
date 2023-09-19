import { masteredTools } from "../../Data/skills";

const skillsByName = {};
masteredTools.forEach((skill) => {
  skillsByName[skill.name] = skill;
})

const SkillsList = ({ name }) => {

  const skillName = name
  const skillInfo = skillsByName[skillName] // Utilisez skillByName pour obtenir les informations de compétence

  console.log("0000000000000- le skillname: ", name);
  console.log("0000000000000- les skillByName: ", skillsByName);

  if (!skillInfo) {
    return <div>Skill non trouvé</div>
  }

  return (
    <div className="flex flex-col items-center rounded-md w-fit h-fit shadow-2xl mx-2">
      <h4 className="mb-3 mx-2 text-xl">{skillInfo.name}</h4>
      <ul className="flex gap-2">
        {/* ... */}
        {/* Utilisez skillInfo.icon et skillInfo.name pour afficher l'icône et le nom de la compétence */}
        <div>
          <li className="w-14 h-14 rounded-full flex justify-center items-center m-1">
            <img className="rounded-xl " src={skillInfo.icon} alt={`${name} logo`} />
          </li>
        </div>
        {/* ... */}
      </ul>
    </div>
  )
}

export default SkillsList;
