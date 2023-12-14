import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ItemNavbar(props) {
    return(<li className='navbar-item'><a href='#'>{props.icon !== 'none' && <FontAwesomeIcon icon={props.icon} />}{props.name !== 'none' && props.name}</a></li>);
}
