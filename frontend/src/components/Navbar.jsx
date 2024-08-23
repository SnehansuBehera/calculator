import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';

const NavigationBar = ({ handleShow }) => {
  return (

    <Navbar bg="primary" variant="dark" expand="lg" className="navbar sticky-top"   >
        <div className="container-fluid">
            <a className="navbar-brand">Office Manager</a>
            <div className="d-flex" >
                <button className="btn btn-success"  onClick={handleShow} type="submit">Login</button>
            </div>
        </div>
    </Navbar>    

    
  );
};

export default NavigationBar;



