import './css/AboutMeHero.css';

function Stack(props) {
    return (
        <div className="stack-item">
            <figure>
                <img src={props.img} alt={props.alt} />
                <figcaption>{props.title}</figcaption>
            </figure>
        </div>
    )
}

export default Stack;