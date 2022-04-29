import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home/Home';
import Footer from './pages/Shared/Footer/Footer';

import Navber from './pages/Shared/Navber/Navber';
import NotFound from './pages/Shared/NotFound/NotFound';

function App() {
  return (
    <div>
      <Navber></Navber>
      <Routes>

         <Route path='/' element={<Home></Home>}></Route>
         <Route path='*' element={<NotFound/>}></Route>
      </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
