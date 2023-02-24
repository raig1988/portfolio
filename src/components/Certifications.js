import BackMenu from "./BackMenu";
import Footer from "./Footer";
import CertificationsHero from "./CertificationsHero";
import MenuDesktop from './MenuDesktop';
import '../DesktopGrid.css';

function Certifications() {
    return (
        <div className="certifications">
            <BackMenu />
            <MenuDesktop />
            <CertificationsHero />
            <Footer />
        </div>
    )
}

export default Certifications;