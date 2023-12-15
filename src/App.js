import './App.css';
import TopNavbar from './components/TopNavbar';
import LeftNavbar from './components/LeftNavbar';

import './stylesheets/generalStyles.css';
import './stylesheets/Navbar.css';

// fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEllipsisVertical, faMagnifyingGlass, faBell, faGripLines, faBorderAll, faBox, faCartShopping, faRotate, faFile, faMoneyCheckDollar, faMessage, faWallet, faUsers, faUser, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

library.add( faEllipsisVertical, faMagnifyingGlass, faBell, faGripLines, faBorderAll, faBox, faCartShopping, faRotate, faFile, faMoneyCheckDollar, faMessage, faWallet, faUsers, faUser, faRightFromBracket );

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
