import DefaultLayout from "../../features/DefaultLayout"
import { NextPageWithLayout } from "../_app"
import ProjectCard from "../../features/projects/components/ProjectCard"

const project = {
    title: "Test Foo Bar",
    status: "test status",

}

const ProjectsPage = () => {
	return (
		<>
            <ProjectCard project={project} />
		</>
	)
}

ProjectsPage.getLayout = page => <DefaultLayout>{page}</DefaultLayout>

export default ProjectsPage
//this is just for passing in data to the card template