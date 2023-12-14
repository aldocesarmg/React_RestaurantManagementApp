import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { leftMenuIcons, topMenuIcons, dashboardIcons, searchIcon, threeDotsIcon } from "../objects/icons";

import SearchBar from './SearchBar';
import UserIcon from './UserIcon';

import '../stylesheets/Navbar.css';

import imgUser from '../img/user.jpg';

export default function Navbar() {
    const iconsIterator = topMenuIcons.map(manuArrayItem => {
        return <ItemNavbar name={manuArrayItem.name} icon={manuArrayItem.icon} />
    });
    return(
        <div className='navbar-container'>
            <div className='search-bar-container'>
                <SearchBar />
            </div>
            <nav className='nav-and-user'>
                <ul className="navbar-items">{iconsIterator}</ul>
                <UserIcon imageSource={imgUser}/>
            </nav>
        </div>
    );
}

function ItemNavbar(props) {
    return(<li className='navbar-item'><a href='#'>{props.icon !== 'none' && <FontAwesomeIcon icon={props.icon} />}{props.name !== 'none' && props.name}</a></li>);
}