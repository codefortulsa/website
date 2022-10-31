import { type } from "os"
import { title } from "process"
import DefaultLayout from "../../features/DefaultLayout"
import ProjectCard, {ProjectCardProps} from "../../features/projects/components/ProjectCard"
import { NextPageWithLayout } from "../_app"

// export type ProjectCardProps = {
//     title: string,
//     status: string,
//     pm: string,
//     repo: string,  
//     img: string, 
//     description: string,
//     changes: string[],
//     links: Array<string>,
//     }
const projects:ProjectCardProps[] =
[
    {
        title: 'this is title',
        status: 'finished',
        pm: 'John Doe',
        repo: 'link.com',
        img: 'https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image-300x225.png', 
        description: 'this is description bla bla',
        changes: ['changes1', 'changes2'],
        links: ['slack.com','github.com']
    },

]


const ProjectPage: NextPageWithLayout = () => {
    return (
        <>
        {
            projects.map(
                (projectProps, index)=>{
                    <ProjectCard
                    {...projectProps}
                    key={index}/>
                }
            )}
        </>
    )
}

export default ProjectPage