import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { leftMenuIcons, topMenuIcons, dashboardIcons, searchIcon, threeDotsIcon } from "../objects/icons";

export default function Navbar() {
    const iconsIterator = topMenuIcons.map(manuArrayItem => {
        return <ItemNavbar name={manuArrayItem.name} icon={manuArrayItem.icon} />
    });
    return(
        <nav className="mainMenu">
            <ul>{iconsIterator}</ul>
        </nav>
    );
}

function ItemNavbar(props) {
    return(<li>{props.icon !== 'none' && <FontAwesomeIcon icon={props.icon} />}{props.name}</li>);
}