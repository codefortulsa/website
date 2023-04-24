/* Action items:
    1. Figure out why second return statement is grayed out
    2. Give each prop the correct tags
    3. Make sure each prop produces correct output
    4. Style output based on figma file
*/

const ProjectCard = props => {
  const {title, status, projectManager, githubLink, heroImage, projectDescription, projectChanges, projectLinks} = props.project;

  return (
    <div>
      <h2>{title}</h2>
      <h3>{status}</h3>
      <h3>{projectManager}</h3>
      <h3>{githubLink}</h3>
      <h3>{heroImage}</h3>
    </div>
  );
  return (
    <div>
      <p>{projectDescription}</p>
      <ul>{projectChanges}</ul>
      <p>{projectLinks}</p>
    </div>
  );
};

export default ProjectCard;
//this is the actual card template you're working on
