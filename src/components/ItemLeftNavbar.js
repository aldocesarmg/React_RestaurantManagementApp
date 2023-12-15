import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ItemLeftNavbar(props) {
    return(
        <li className='navbar-item left-navbar-item'>
            <a href='#'>
                <div className='left-navbar-item-a'>
                    <div className='left-navbar-fa-icon'>
                        <FontAwesomeIcon icon={props.icon} size='xl'/>
                    </div>
                    <div>
                        {props.name}
                    </div>
                </div>
            </a>
        </li>);
}