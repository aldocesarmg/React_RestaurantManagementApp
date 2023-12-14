import './App.css';
import Navbar from './components/Navbar';

// fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBox, faBorderAll, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';

library.add(faBox, faBorderAll, faEllipsisVertical);

function App() {
  return (
    <div className="App">
      <div><FontAwesomeIcon icon="fa-solid fa-box" /></div>
      <div><FontAwesomeIcon icon="fa-solid fa-border-all" /></div>
      <Navbar />
    </div>
  );
}

export default App;
