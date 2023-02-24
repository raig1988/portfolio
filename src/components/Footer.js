import githubLogo from '../images/github-logo.png';
import twitterLogo from '../images/twitter-logo.png';
import emailLogo from '../images/email-logo.png';
import './css/Footer.css';
import '../DesktopGrid.css';

function Footer() {
    return (
        <div className="Footer">
            <a href="https://github.com/raig1988"><img className='githubLogo' src={githubLogo} alt="github logo" /></a>
            <a href="https://twitter.com/123Aprendo"><img src={twitterLogo} alt="twitter logo" /></a>
            <a href="mailto: raig.iglesias@gmail.com"><img src={emailLogo} alt="email logo" /></a>
        </div>
    )
}

export default Footer;