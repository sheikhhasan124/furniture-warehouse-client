import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes } from 'react-router-dom';
import './App.css';
import Footer from './pages/Shared/Footer/Footer';

import Navber from './pages/Shared/Navber/Navber';

function App() {
  return (
    <div>
      <Navber></Navber>
      <Routes>

      </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
