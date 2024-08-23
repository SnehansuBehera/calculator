import React, { useState, useEffect } from 'react';
import NavigationBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import AuthModal from './components/AuthModal';

function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const navbar = document.querySelector('.animated-navbar');
    setTimeout(() => {
      navbar.classList.add('show');
    }, 100); // Delay to ensure smooth transition
  }, []);

  return (
    <>
      <NavigationBar handleShow={handleShow} />
      <HeroSection handleShow={handleShow} />
      <AuthModal show={show} handleClose={handleClose} />
      {show && <div className="backdrop-blur"></div>}
    </>
  );
}

export default App;
