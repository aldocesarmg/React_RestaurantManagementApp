import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ItemLeftNavbar from './ItemLeftNavbar';

import imgSrc from '../img/logo-no-background.png';

import { leftMenuIcons } from "../objects/icons";

export default function LeftNavbar() {
    const iconsIterator = leftMenuIcons.map(menuArrayItem => {
        return <ItemLeftNavbar name={menuArrayItem.name} icon={menuArrayItem.icon} />
    });

    return(
        <div className='left-navbar-container'>
            <div className='left-navbar-top'>
                <img className='antojitos-logo' src={imgSrc}></img>
                <button className='collapse-button' type="submit"><FontAwesomeIcon icon="fa-solid fa-grip-lines" /></button>
            </div>
            <div className='left-navbar-content'>
                <nav>
                    <ul className='left-navbar-items'>
                        <>{iconsIterator}</>
                    </ul>
                </nav>
            </div>
            <div className='left-navbar-bottom'>
                
            </div>
        </div>
    );
}