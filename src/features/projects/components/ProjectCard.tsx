import { Props } from "@mdx-js/react/lib"
import { ReactElement } from "react"
import internal from "stream"

export type ProjectCardProps = {
title: string,
status: string,
pm: string,
repo: string,  
img: string, 
description: string,
changes: string[],
links: Array<string>,
}

const  ProjectCard= ({title,status,pm, repo, img, description,changes, links}:ProjectCardProps) => {

  return (
    <h1>title</h1>
    
  )
}


export default ProjectCard