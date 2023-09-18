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
    <div className="flex flex-col w-fit h-36 border-4 rounded-lg border-blue-300">
      <h4 className="mb-6 text-xl">{skillInfo.name}</h4>
      <ul className="flex gap-2">
        {/* ... */}
        {/* Utilisez skillInfo.icon et skillInfo.name pour afficher l'icône et le nom de la compétence */}
        <div>
          <li className="w-14 h-14 rounded-full border-2 border-blue-400 flex justify-center items-center">
            <img className="rounded-full " src={skillInfo.icon} alt={`${name} logo`} />
            <h5>{name}</h5>
          </li>
        </div>
        {/* ... */}
      </ul>
    </div>
  )
}

export default SkillsList;
