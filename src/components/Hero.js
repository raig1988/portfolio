import raig from '../images/raig3.jpg';
import './css/Hero.css';
import '../DesktopGrid.css';

function Hero() {
    return (
        <div className='hero'>
            <img id="heroAvatar" src={raig} alt="my avatar" />
            <div className='heroText'>
                <h1>Rodrigo Iglesias</h1>
                <h1>Jr. Full Stack & Blockchain Developer</h1>
            </div>
        </div>
    )
}

export default Hero;