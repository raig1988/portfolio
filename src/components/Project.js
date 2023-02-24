import './css/Project.css';

function Project(props) {
    return (
        <div className="project">
            <h2 className="project-text">{props.title}</h2>
            <h2 className="project-text">Stack used: {props.stack}</h2>
            <a href={props.projectLink} target="_blank" rel="noreferrer"><button>Visit</button></a><br></br>
            <a href={props.projectGithub} target="_blank" rel="noreferrer"><button>GitHub</button></a>
        </div>
    )
}

export default Project;