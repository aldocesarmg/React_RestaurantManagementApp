import './App.css';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import LeftNavbar from './components/LeftNavbar';

import './stylesheets/generalStyles.css'

// fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBox, faBorderAll, faEllipsisVertical, faMagnifyingGlass, faBell } from '@fortawesome/free-solid-svg-icons';

library.add(faBox, faBorderAll, faEllipsisVertical, faMagnifyingGlass, faBell);

function App() {
  return (
    <div className="App">
      <div className='left-navbar-component'>
        <LeftNavbar />
      </div>
      <div className='navbar-component'>
        <Navbar />
      </div>
    </div>
  );
}

export default App;
