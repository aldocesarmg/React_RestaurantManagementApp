import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../stylesheets/SearchBar.css'

export default function SearchBar() {
    return(
        <div className='button-container'>
            <form action="/action_page.php">
                <input className='search-box' type="text" placeholder="Search"></input>
                <button className='search-button' type="submit"><FontAwesomeIcon icon="fa-solid fa-magnifying-glass" /></button>
            </form>
        </div>
    );
}