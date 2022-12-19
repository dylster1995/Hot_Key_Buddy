import React, { useState, useEffect } from "react";
import {Button, Alert} from 'react-bootstrap';
import { useMutation } from '@apollo/client';
import Form from 'react-bootstrap/Form';
import "../styles/Login.css";
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';

const Signup = () => {
    // set initial form state
    const [userFormData, setUserFormData] = useState({
      email: '',
      password: '',
    });
    // set state for form validation
    const [validated] = useState(false);
    // set state for alert
    const [showAlert, setShowAlert] = useState(false);
  
    const [addUser, { error }] = useMutation(ADD_USER);
  
    useEffect(() => {
      if (error) {
        setShowAlert(true);
      } else {
        setShowAlert(false);
      }
    }, [error]);
  
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setUserFormData({ ...userFormData, [name]: value });
    };
  
    const handleFormSubmit = async (event) => {
      event.preventDefault();
  
      // check if form has everything (as per react-bootstrap docs)
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      try {
        const { data } = await addUser({
          variables: { ...userFormData },
        });
        console.log(data);
        Auth.login(data.createUser.token, data.createUser.user._id);
      } catch (err) {
        console.error(err);
      }
  
      setUserFormData({
        email: '',
        password: '',
      });
    };
  
  return (
    <>
    <div className="login-form">
      <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
      <Alert
        dismissible
        onClose={() => setShowAlert(false)}
        show={showAlert}
        variant="danger"
      >
        Something went wrong with your signup!
      </Alert>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
            type="text"
            placeholder="email"
            name="email"
            onChange={handleInputChange}
            value={userFormData.email}
            required
          />
          <Form.Control.Feedback type="invalid">
            Email is required!
          </Form.Control.Feedback>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
            type="password"
            placeholder="Your password"
            name="password"
            onChange={handleInputChange}
            value={userFormData.password}
            required
          />
          <Form.Control.Feedback type="invalid">
            Password is required!
          </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="info" type="submit" disabled={
            !(
              userFormData.email &&
              userFormData.password
            )
          }>
        Sign Up!
      </Button>
      <br></br>
      <p>Already have an account? <br></br><a href="/login">Login!</a></p>
    </Form>
    </div>
    </>
  );
};

export default Signup;
