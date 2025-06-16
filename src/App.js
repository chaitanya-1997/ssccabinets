import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Portfolio from './components/Portfolio/Portfolio';
import Stats from './components/Stats/Stats';
import About from './components/About/About';
import Testimonials from './components/Testimonials/Testimonials';
import Footer from './components/Footer/Footer';
import MyHome from './components/MyHome/MyHome';
import Mission from './components/Mission/Mission';
import OurGuarantee from './components/OurGuarantee/OurGuarantee';
import OurProducts from './components/OurProducts/OurProducts';

import Experience from './components/Experience/Experience';

import { Routes, Route, } from "react-router-dom";
import OurClients from './components/OurClients/OurClients';
import Product from './components/Product/Product';
import ContactMe from './components/Contact/ContactMe';
import LoginPage from './components/Login/LoginPage';
import Gallery from './components/Gallery/Gallery';
import SignupPage from './components/Signup/SignupPage';
import ScrollToTop from './ScrollToTop ';
function App() {
  return (
    <div className="App">
      {/* <MyHome /> */}
      <ScrollToTop></ScrollToTop>
      <Header />
      {/* <OurClients/> */}
      {/* <Hero /> */}
      {/* <Services /> */}
      {/* <Portfolio /> */}
      {/* <Stats /> */}
      {/* <About /> */}
      {/* <Mission /> */}
      {/* <Testimonials /> */}
      {/* <OurGuarantee /> */}
      {/* <Footer />  */}
      {/* <Experience /> */}
      {/* <ContactMe/> */}
      {/* <LoginPage /> */}
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
