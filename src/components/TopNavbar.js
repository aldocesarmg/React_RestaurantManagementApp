import Navbar from './Navbar';
import SearchBar from './SearchBar';
import UserIcon from './UserIcon';

import {topMenuIcons} from "../objects/icons";

import '../stylesheets/TopNavbar.css';

import imgUser from '../img/user.jpg';

export default function TopNavbar(props) {
    return(
        <div className='navbar-container'>
            <div className='search-bar-container'>
                <SearchBar />
            </div>
            <nav className='nav-and-user'>
                <Navbar iconsGroupName={topMenuIcons} />
                <UserIcon imageSource={imgUser}/>
            </nav>
        </div>
    );
}