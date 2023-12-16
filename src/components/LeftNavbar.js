import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ItemLeftNavbar from './ItemLeftNavbar';

import imgSrc from '../img/logo-no-background.png';

import { leftMenuIcons } from "../objects/icons";

export default function LeftNavbar() {
    const iconsIterator = leftMenuIcons.map(menuArrayItem => {
        return <ItemLeftNavbar key={leftMenuIcons.indexOf(menuArrayItem.name)} name={menuArrayItem.name} icon={menuArrayItem.icon} />
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
            <div className='left-navbar-bottom' id='LOG-OUT-BUTTON'>
                <ul>
                    <li className='navbar-item left-navbar-item'>
                        <a href='#'>
                            <div className='left-navbar-item-a'>
                                <div className='left-navbar-fa-icon'>
                                    <FontAwesomeIcon icon='fa-solid fa-right-from-bracket' size='xl'/>
                                </div>
                                <div>
                                    Log out
                                </div>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}