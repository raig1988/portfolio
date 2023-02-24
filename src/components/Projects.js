import BackMenu from "./BackMenu";
import Footer from "./Footer";
import ProjectsHero from "./ProjectsHero";
import MenuDesktop from './MenuDesktop';
import '../DesktopGrid.css';

function Projects() {
    return (
        <div className="projects">
            <BackMenu />
            <MenuDesktop />
            <ProjectsHero />
            <Footer />
        </div>
    )
}

export default Projects;