import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddItem from './pages/AddItems/AddItem';
import Login from './pages/Auth/Login/Login';
import Registration from './pages/Auth/Registration/Registration';
import RequireAuth from './pages/Auth/requireAuth/RequireAuth';
import Home from './pages/Home/Home/Home';
import Inventory from './pages/inventory/Inventory';
import ManageStock from './pages/MangeStock/ManageStock';
import MyItems from './pages/MyItems/MyItems';
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
         <Route path='/addItem' element={<AddItem></AddItem>}></Route>
         <Route path='/myItem' element={<MyItems></MyItems>}></Route>
         <Route path='/register' element={<Registration></Registration>}></Route>
         <Route path='/manageStock' element={<ManageStock></ManageStock>}></Route>
         <Route path="/product/:id" element={<RequireAuth>
          <Inventory></Inventory>
         </RequireAuth>}></Route>
         <Route path='*' element={<NotFound/>}></Route>
      </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
