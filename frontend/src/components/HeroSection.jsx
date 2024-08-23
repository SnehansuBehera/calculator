import React from 'react';
import { Button } from 'react-bootstrap';

const HeroSection = ({ handleShow }) => {
  return (
    <header className="bg-light min-vh-100 d-flex align-items-center justify-content-center">
      <div className="container text-center">
        <h1 className="display-4">Manage Your Office Efficiently</h1>
        <p className="lead">Our office management system streamlines workflows and enhances productivity.</p>
        <Button variant="success" size="lg" onClick={handleShow}>Get Started</Button>
      </div>
    </header>
  );
};

export default HeroSection;
