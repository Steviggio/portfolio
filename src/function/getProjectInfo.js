export function getProjectInfoByName(datas, name) {
  const projectsByName = {};
  datas.forEach((project) => {
    projectsByName[project.name] = project;
  });

  const projectInfo = projectsByName[name];

  return projectInfo;
}
