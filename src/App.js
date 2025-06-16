import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import MyHome from './components/MyHome/MyHome';
import Experience from './components/Experience/Experience';
import { Routes, Route, } from "react-router-dom";
import Product from './components/Product/Product';
import ContactMe from './components/Contact/ContactMe';
import LoginPage from './components/Login/LoginPage';
import Gallery from './components/Gallery/Gallery';
import SignupPage from './components/Signup/SignupPage';
import ScrollToTop from './ScrollToTop ';
function App() {
  return (
    <div className="App">
  
      <ScrollToTop></ScrollToTop>
      <Header />
    
      <Routes>
        <Route path="/" element={<MyHome />} />
        <Route path='/experience' element={<Experience />} />
        <Route path='/products' element={<Product />} />
        <Route path='/contactus' element={<ContactMe />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/gallery' element={<Gallery />} />

      </Routes>
    </div>
  );
}

export default App;
