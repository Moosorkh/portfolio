import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/Header';
import Navbar from './components/Navbar';
import Particles from 'react-particles-js';


function App() {
  return (
    <>
    {/* <Particles /> */}
      <Navbar />,
      <Header />
    </>
  );
}

export default App;
