import BackMenu from "./BackMenu";
import Footer from "./Footer";
import ContactMeHero from "./ContactMeHero";
import MenuDesktop from './MenuDesktop';
import '../DesktopGrid.css';

function ContactMe() {
    return (
        <div className="contactMe">
            <BackMenu />
            <MenuDesktop />
            <ContactMeHero />
            <Footer />
        </div>
    )
}

export default ContactMe;