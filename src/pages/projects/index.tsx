import { type } from "os"
import { title } from "process"
import DefaultLayout from "../../features/DefaultLayout"
import ProjectCard, {ProjectCardProps} from "../../features/projects/components/ProjectCard"
import { NextPageWithLayout } from "../_app"
import {}
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
        title: 'Title',
        status: 'Finished',
        pm: 'John Doe',
        repo: 'link.com',
        img: 'https://as1.ftcdn.net/v2/jpg/02/48/42/64/1000_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg', 
        description: 'this is description bla bla',
        changes: ['Commit 1 did this', 'changes2'],
        links: ['slack.com','github.com']
    },
    
]


const ProjectPage: NextPageWithLayout = () => {
    return (
        <>
        {
            projects.map(
                (projectProps, index)=>(
                    <ProjectCard
                    {...projectProps}
                    key={index}/>
                )
            )}
        </>
    )
}
ProjectPage.getLayout = page => <DefaultLayout>{page}</DefaultLayout>
export default ProjectPage