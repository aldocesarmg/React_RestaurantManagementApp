import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ItemTopNavbar from './ItemTopNavbar';
import SearchBar from './SearchBar';
import UserIcon from './UserIcon';

import { topMenuIcons } from "../objects/icons";

import imgUser from '../img/user.jpg';

export default function TopNavbar() {
    const iconsIterator = topMenuIcons.map(menuArrayItem => {
        return <ItemTopNavbar name={menuArrayItem.name} />
    });

    return(
        <div className='navbar-container'>
            <div className='search-bar-container'>
                <SearchBar />
            </div>
            <nav className='nav-and-user'>
                <ul className="top-navbar-items">
                    <>{iconsIterator}</>
                    <li className='navbar-item'>
                        <a id='notification-icon' href='#'><FontAwesomeIcon icon='fa-solid fa-bell' /></a>
                    </li>
                    <li className='navbar-item'><UserIcon imageSource={imgUser}/></li>
                </ul>
            </nav>
        </div>
    );
}