import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Cover from './pages/Cover';

const index = () => {
  return (
    <div>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Cover />}></Route>
        </Routes>
        
    </div>
  )
}

export default index
