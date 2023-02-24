import AboutMeHero from './AboutMeHero';
import BackMenu from './BackMenu';
import Footer from './Footer';
import MenuDesktop from './MenuDesktop';
import '../DesktopGrid.css';

function AboutMe() {
    return (
        <div className="AboutMe">
            <BackMenu />
            <MenuDesktop />
            <AboutMeHero />
            <Footer />
        </div>
    )
}

export default AboutMe;