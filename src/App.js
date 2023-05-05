import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import Courses from './component/Courses';
import Policy from './component/policy';
import Error from './component/Error';
import List from './component/List';
import Footer from'./component/Footer';


const App = () => {
  return (
    <>
      <List/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />} />
        <Route component={<Error/>} />
      </Routes>
      <Footer/>
    </>
  );
};

export default App;