import './css/CertificationsHero.css';

function EachCertification(props) {
    return (
        <a href={props.link} target="_blank" rel="noreferrer" className="eachCertification">
            <h1>{props.institution}</h1>
            <h2>{props.course}</h2>
        </a>
    )
}

export default EachCertification;