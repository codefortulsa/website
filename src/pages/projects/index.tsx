import { type } from "os"
import { title } from "process"
import DefaultLayout from "../../features/DefaultLayout"
import ProjectCard, { Project } from "../../features/projects/components/ProjectCard"
import { NextPageWithLayout } from "../_app"

const ProjectPage: NextPageWithLayout = (projects:Array<Project>) => {
    return <>{projects.map((project,index) => (
        <ProjectCard project={project} key={index}/>
    ))} </>
}

export default ProjectPage