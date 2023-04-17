const ProjectCard = (props) => {
    const {
    title, status
    }   = props.project
    
    return (
         <div>
             <h2>{title}</h2>
            <h3>{status}</h3>
        </div>
    )
}

export default ProjectCard
//this is the actual card template you're working on
//try to figure out the prettier setup