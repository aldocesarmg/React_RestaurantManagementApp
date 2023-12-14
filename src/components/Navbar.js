import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { leftMenuIcons, topMenuIcons, dashboardIcons, searchIcon, threeDotsIcon } from "../objects/icons";

import ItemNavbar from './ItemNavbar';

export default function Navbar(props) {
    const iconsIterator = props.iconsGroupName.map(manuArrayItem => {
        return <ItemNavbar name={manuArrayItem.name} icon={manuArrayItem.icon} />
    });

    return(
        <ul className="navbar-items">{iconsIterator}</ul>
    );
}