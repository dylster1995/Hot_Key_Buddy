import React, { useState, useEffect} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "../styles/Login.css"
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import {Alert} from 'react-bootstrap';

const Login = () => {
  const [userFormData, setUserFormData] = useState({ email: '', password: '' });
  const [userData, setUserData] = useState({email: '', password: ''});
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const [login, { error }] = useMutation(LOGIN_USER);

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
      const { data } = await login({
        variables: { ...userFormData },
      });

      console.log(data);
      Auth.login(data.login.token, data.login.user._id);
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
      <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
<<<<<<< HEAD
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label htmlFor="email">Email address</Form.Label>
        <Form.Control  
            type="text"
            placeholder="Your email"
            name="email"
            onChange={handleInputChange}
            value={userData.email}
            required />
        {/* <Form.Text className="text-muted">
=======
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
          placeholder="Enter email"
          name="email"
          onChange={handleInputChange}
          value={userFormData.email}
          required
        />
        <Form.Text className="text-muted">
>>>>>>> 6991110bc5a2355e2d19e5e235acb787214304be
          We'll never share your email with anyone else.
        </Form.Text> */}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
<<<<<<< HEAD
        <Form.Label htmlFor="password">Password</Form.Label>
        <Form.Control   
=======
        <Form.Label>Password</Form.Label>
        <Form.Control
>>>>>>> 6991110bc5a2355e2d19e5e235acb787214304be
            type="password"
            placeholder="Your password"
            name="password"
            onChange={handleInputChange}
<<<<<<< HEAD
            value={userData.password}
            required/>
=======
            value={userFormData.password}
            required
          />
>>>>>>> 6991110bc5a2355e2d19e5e235acb787214304be
      </Form.Group>
      {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
        {/* <Form.Check type="checkbox" label="Check me out" /> */}
      {/* </Form.Group> */} 
      <Form.Control.Feedback type="invalid">
            Password is required!
          </Form.Control.Feedback>
      <Button  
      disabled={!(userData.email && userData.password)}
        variant="info" type="submit">
        Submit
      </Button>
      <br></br>
      <p>Not a member?<br></br> <a href="/signup">Sign Up!</a></p>
    </Form>
    </div>
    </>
  );
};

export default Login;
