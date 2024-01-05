import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import NavBar from './NavBar';
import {Route,Routes} from 'react-router-dom'
import About from './About';
import Blog from './Blog';
import Inventory from './Inventory';
import Manageitem from './Manageitem';
import Additem from './Additem';
import Login from './Login';
import Register from './Register';
import PrivateRoute from './PrivateRoute';


const App = () => {
  return (
    <div>
       <div>
        <NavBar/>
       </div>
       <Routes>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Blog' element={<Blog/>}/>
        <Route path='/Inventory' element={<Inventory/>}/>
        {/* <Route path='/Manageitem' element={<Manageitem/>}/> */}
        <Route path='/Additem' element={<Additem/>}/>
        <Route path='/' element={<Login/>}/>
        <Route path='/Register' element={<Register/>}/>
        <Route path="/Manageitem" element={<PrivateRoute><Manageitem /></PrivateRoute>} />

        
       </Routes>
    </div>
  );
};

export default App;