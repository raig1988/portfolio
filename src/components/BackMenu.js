import backButton from '../images/backArrow.png';
import {Link, Outlet} from 'react-router-dom';
import './css/BackMenu.css';
import '../DesktopGrid.css';

function BackMenu() {
    return (
        <div className='backMenu'>
            <Link to="/"><img src={backButton} alt="back button to return to menu" /></Link>
            <Outlet />
        </div>

    )
}

export default BackMenu;