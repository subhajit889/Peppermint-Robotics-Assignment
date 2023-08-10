import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './component/Navbar/Navbar';
import Careers from './component/Career/Careers';
import Footer from './component/Footer/Footer';

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/career' element={<Careers/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App