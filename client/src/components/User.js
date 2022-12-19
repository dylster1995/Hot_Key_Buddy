import React, { useState, useEffect} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "../styles/Login.css"
import { useMutation } from '@apollo/client';
import { UPDATE_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import {Alert} from 'react-bootstrap';

const User = () => {
  const [userFormData, setUserFormData] = useState({ email: '', password: '' });
  const [userData, setUserData] = useState({email: '', password: ''});
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const [updateUser, { error }] = useMutation(UPDATE_USER);

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

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const { data } = await updateUser({
        variables: { ...userFormData },
      });

      console.log(data);
      Auth.login(data.updateUser.token, data.updateUser._id);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setUserFormData({
      email: '',
      password: '',
    });
  };
  
  return (
    <>
    <div className="login-form">
        <h1>User Settings</h1>
      <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
      <Alert
          dismissible
          onClose={() => setShowAlert(false)}
          show={showAlert}
          variant="danger"
        >
          Something went wrong with your login credentials!
        </Alert>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control 
          type="text"
          placeholder="Email"
          name="email"
          onChange={handleInputChange}
          value={userFormData.email}
          required
        />
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
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="info" type="submit">
        Submit
      </Button>
      <br></br>
    </Form>
    </div>
    </>
  );
};

export default User;
