import SkillsList from "../SkillsList/SkillsList";

export default function DevSkillsContainer({ titre, skills }) {
  return (
    <>
      <div className="justify-center flex flex-col rounded-3xl p-2 shadow-md skill-list bg-blue-50 lg:max-w-[600px]">
        <h3 className="lg:text-xl mt-2">{titre}</h3>
        <div className="flex flex-wrap justify-evenly mt-5">
          {skills.map((skill, index) => (
            <SkillsList key={index} name={skill} />
          ))}
        </div>
      </div>
    </>
  );
}
