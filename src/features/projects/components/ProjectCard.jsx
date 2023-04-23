/* const project = {
  title: 'Insert title here',
  status: 'Insert status here',
  projectManager: 'Insert manager name',
  githubLink: 'Insert GitHub link',
  heroImage: 'Insert hero image',
  projectDescription: 'Insert project description',
  projectChanges: 'Insert recent changes',
  projectLinks: 'Insert project links',
};
*/

const ProjectCard = props => {
  const {title, status} = props.project;

  return (
    <div>
      <h2>{title}</h2>
      <h3>{status}</h3>
    </div>
  );
};

export default ProjectCard;
//this is the actual card template you're working on
