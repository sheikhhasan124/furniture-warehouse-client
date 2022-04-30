import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Auth/Login/Login';
import Registration from './pages/Auth/Registration/Registration';
import Home from './pages/Home/Home/Home';
import Inventory from './pages/inventory/Inventory';
import Footer from './pages/Shared/Footer/Footer';

import Navber from './pages/Shared/Navber/Navber';
import NotFound from './pages/Shared/NotFound/NotFound';

function App() {
  return (
    <div>
      <Navber></Navber>
      <Routes>
         <Route path='/' element={<Home></Home>}></Route>
         <Route path='/login' element={<Login></Login>}></Route>
         <Route path='/register' element={<Registration></Registration>}></Route>
         <Route path="/product/:id" element={<Inventory></Inventory>}></Route>
         <Route path='*' element={<NotFound/>}></Route>
      </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
