import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const AuthModal = ({ show, handleClose }) => {
  const [isSignup, setIsSignup] = useState(true);

  const toggleAuthMode = () => {
    setIsSignup(!isSignup);
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{isSignup ? 'Sign Up' : 'Login'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter password" />
          </Form.Group>

          {/* Conditional text based on auth mode */}
          {isSignup && (
            <Form.Group controlId="formBasicPasswordConfirm">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" placeholder="Confirm password" />
            </Form.Group>
          )}

          {/* Account status toggle text */}
          <div className="text-center mt-3">
            {isSignup ? (
              <>
                <p>Already have an account?{' '}
                  <Button variant="link" onClick={toggleAuthMode}>
                    Login here
                  </Button>
                </p>
              </>
            ) : (
              <>
                <p>Don't have an account?{' '}
                  <Button variant="link" onClick={toggleAuthMode}>
                    Sign up here
                  </Button>
                </p>
              </>
            )}
          </div>

          {/* Submit button */}
          <Button variant="primary" type="submit" className="w-100 mt-3">
            {isSignup ? 'Sign Up' : 'Login'}
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default AuthModal;
