import React, { useState, useMemo, useCallback, useEffect } from "react";
import { getProjectInfoByName } from "../../function/getProjectInfo";
import { projectInfos } from "../../Data/projects";


const ProjectImgDiv = () => {

  const name = "Kasa"
  const imagesArray = useMemo(() => getProjectInfoByName(projectInfos, name))
  console.log(imagesArray)

  return (
    <div className="grid grid-cols-2 w-fit">
      {imagesArray.img.map((item, index) => {
        return <img className="mx-auto max-h-[500px] max-w-[500px] object-contain" src={item} alt={index} />
      })}
    </div>
  )
}

export default ProjectImgDiv;