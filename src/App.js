
import React from 'react';
import './App.css';

import { Route , Routes } from 'react-router-dom';
import Navbar from './component/global/navbar/Navbar';
import Accessories from './pages/Accessories';
import Bottoms from './pages/Bottoms';
import Collection from './pages/Collection';
import Dresses from './pages/Dresses';
import Footwear from './pages/Footwear'
import Shopcategory from './pages/Shopcategory';
import Tops from './pages/Tops';
import Newarrivals from './pages/Newarrivals';
import Footer from './component/global/footer/Footer';
import Users from './stat/Users';
import SingleUser from './stat/SingleUser';

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Accessories/>}></Route>
        <Route path='/accessories/' element={<Accessories/>}></Route>
        <Route path='/bottoms/' element={<Bottoms/>}></Route>
        <Route path='/collection/' element={<Collection/>}></Route>
        <Route path='/dresses/' element={<Dresses/>}></Route>
        <Route path='/footwear/' element={<Footwear/>}></Route>
        <Route path='/shopcategory/' element={<Shopcategory/>}></Route>
        <Route path='/tops/' element={<Tops/>}></Route>
        <Route path='/newarrivals/' element={<Newarrivals/>}></Route>
        <Route path='/user/' element={<Users/>}></Route>
        <Route path='/user/:id' element={<SingleUser/>}></Route>

      </Routes>

      <Footer/>
  

    </>
  );
}

export default App;

