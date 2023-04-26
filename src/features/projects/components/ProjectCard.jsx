/* Action items:
    2. Give each prop the correct tags
    3. Make sure each prop produces correct output
    4. Style output based on figma file
*/

const ProjectCard = props => {
  const {
    title,
    status,
    projectManager,
    githubLink,
    heroImage,
    imageAltText,
    projectDescription,
    projectChanges,
    projectLinks,
  } = props.project;

  return (
    <div>
      <section>
        <h2>{title}</h2>
        <h3>{status}</h3>
        <h4>{projectManager}</h4>
      </section>
      <section>
        <a>{githubLink}</a>
      </section>
      <section>
        <image alt={imageAltText}>{heroImage}</image>
        <p>{projectDescription}</p>
      </section>
      <section>
        <ul>{projectChanges}</ul>
        <p>{projectLinks}</p>
      </section>
    </div>
  );
};

export default ProjectCard;
//this is the actual card template you're working on
