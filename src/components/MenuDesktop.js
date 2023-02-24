import './css/Menu.css';
import '../DesktopGrid.css';
import { Link, Outlet } from 'react-router-dom'; 

function MenuDesktop() {
    return (
        <nav className="menuDesktop">
            <ul>
                <li><Link to="/about"><h1>About Me</h1></Link></li>
                <li><Link to="/projects"><h1>Projects</h1></Link></li>
                <li><Link to="/certifications"><h1>Certifications</h1></Link></li>
                <li><Link to="/contact"><h1>Contact Me</h1></Link></li>
            </ul>
            <Outlet />
        </nav>
    )
}

export default MenuDesktop;