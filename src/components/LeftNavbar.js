import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Navbar from './Navbar';

import '../stylesheets/LeftNavbar.css';
import imgSrc from '../img/logo-no-background.png';

import {leftMenuIcons} from "../objects/icons";

export default function LeftNavbar() {
    return(
        <div className='left-navbar-container'>
            <div className='left-navbar-top'>
                <img className='antojitos-logo' src={imgSrc}></img>
                <button className='collapse-button' type="submit"><FontAwesomeIcon icon="fa-solid fa-grip-lines" /></button>
            </div>
            <div className='left-navbar-content'>
                <nav className='left-navbar-nav'>
                    <Navbar iconsGroupName={leftMenuIcons} />
                </nav>
            </div>
            <div className='left-navbar-bottom'>
                
            </div>
        </div>
    );
}