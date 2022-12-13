import { Props } from "@mdx-js/react/lib"
import { ReactElement } from "react"
import internal from "stream"
import Image from "next/image"

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
  <div className="bg-cft-blue">
      <h1>{title}</h1>
      <h2>{status}</h2>
      <h3>{pm}</h3>
      <h3>{repo}</h3>
      <Image src={img} alt='project image' layout="fill"/>
      <p>{description}</p>
      <ul>
        {
        changes.map((index,change) => (<li key={index}>{change}</li>))
        }
      </ul>
    </div>
  )
}


export default ProjectCard