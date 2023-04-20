import DefaultLayout from '../../features/DefaultLayout';
import {NextPageWithLayout} from '../_app';
import ProjectCard from '../../features/projects/components/ProjectCard';

const project = {
  title: 'Insert title here',
  status: 'Insert status here',
  projectManager: 'Insert manager name',
  githubLink: 'Insert GitHub link',
  heroImage: 'Insert hero image',
  projectDescription: 'Insert project description',
  projectChanges: 'Insert recent changes',
  projectLinks: 'Insert project links',
};

const ProjectsPage = () => {
  return (
    <>
      <ProjectCard project={project} />
    </>
  );
};

ProjectsPage.getLayout = page => <DefaultLayout>{page}</DefaultLayout>;

export default ProjectsPage;
//this is just for passing in data to the card template
