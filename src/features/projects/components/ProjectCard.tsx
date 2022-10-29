import { ReactElement } from "react"
import internal from "stream"


function ProjectCard(project:Project ) {
    const {title,status,pm,repo,img,description,changes,links}=project
  return (
    <div>ProjectCard</div>
  )
}

export interface Project extends ReactElement = {
title: string,
status: string,
pm: string,
repo: string,  
img: string, 
description: string,
changes: string[],
links: Array<string>,
}
export default ProjectCard