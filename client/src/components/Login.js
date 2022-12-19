import React, { useState, useEffect} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "../styles/Login.css"
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';

const Login = () => {

  const [userData, setUserData] = useState({email: '', password: ''})
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
    setUserData({ ...userData, [name]: value });
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
        variables: { ...userData },
      });

      console.log(data);
      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setUserData({
      email: '',
      password: '',
    });
  };
  
  return (
    <>
    <div className="login-form">
      <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
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
          We'll never share your email with anyone else.
        </Form.Text> */}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label htmlFor="password">Password</Form.Label>
        <Form.Control   
            type="password"
            placeholder="Your password"
            name="password"
            onChange={handleInputChange}
            value={userData.password}
            required/>
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
      <Button variant="info" type="submit">
        Create Account
      </Button>
    </Form>
    </div>
    </>
  );
};

export default Login;
