import './App.css';
import TopNavbar from './components/TopNavbar';
import LeftNavbar from './components/LeftNavbar';
import Dashboard from './components/Dashboard';

import './stylesheets/generalStyles.css';
import './stylesheets/Navbar.css';
import './stylesheets/Dashboard.css';


// fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEllipsisVertical, faMagnifyingGlass, faBell, faGripLines, faBorderAll, faBox, faCartShopping, faRotate, faFile, faMoneyCheckDollar, faMessage, faWallet, faUsers, faUser, faRightFromBracket, faBagShopping, faStore } from '@fortawesome/free-solid-svg-icons';

library.add( faEllipsisVertical, faMagnifyingGlass, faBell, faGripLines, faBorderAll, faBox, faCartShopping, faRotate, faFile, faMoneyCheckDollar, faMessage, faWallet, faUsers, faUser, faRightFromBracket, faBagShopping, faStore );

function App() {
  return (
    <div className="App">
      <div className='left-navbar-component'>
        <LeftNavbar />
      </div>
      <div id='navbar-and-content'>
        <div className='top-navbar-component'>
          <TopNavbar />
        </div>
        <div className='dashboard-component'>
          <Dashboard />
        </div>
      </div>
    </div>
  );
}

export default App;
