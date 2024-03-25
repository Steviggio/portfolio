import SkillsList from "../SkillsList/SkillsList";

export default function DevSkillsContainer({ titre, skills }) {
  return (
    <>
      <div className="justify-center flex flex-col rounded-md p-2 shadow-md border-t-2 skill-list bg-blue-50 lg:max-w-[600px]">
        <h3 className="lg:text-xl border-b-2 w-4/5 mx-auto">{titre}</h3>
        <div className="flex flex-wrap justify-evenly mt-5">
          {skills.map((skill, index) => (
            <SkillsList key={index} name={skill} />
          ))}
        </div>
      </div>
    </>
  );
}
