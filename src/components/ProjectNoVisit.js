function ProjectNoVisit(props) {
    return (
        <div className="project">
            <h2 className="project-text">{props.title}</h2>
            <h2 className="project-text">Stack used: {props.stack}</h2>
            <a href={props.projectGithub} target="_blank" rel="noreferrer"><button>GitHub</button></a>
        </div>
    )
}

export default ProjectNoVisit;