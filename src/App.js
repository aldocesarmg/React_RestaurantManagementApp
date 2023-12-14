import './App.css';
import TopNavbar from './components/TopNavbar';
import LeftNavbar from './components/LeftNavbar';

import './stylesheets/generalStyles.css'

// fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBox, faBorderAll, faEllipsisVertical, faMagnifyingGlass, faBell, faGripLines } from '@fortawesome/free-solid-svg-icons';

library.add(faBox, faBorderAll, faEllipsisVertical, faMagnifyingGlass, faBell, faGripLines );

function App() {
  return (
    <div className="App">
      <div className='left-navbar-component'>
        <LeftNavbar />
      </div>
      <div className='navbar-component'>
        <TopNavbar />
      </div>
    </div>
  );
}

export default App;
