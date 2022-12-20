// import React, { useState, useEffect} from "react";
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import "../styles/Login.css"
// import Auth from '../utils/auth';
// import {Alert} from 'react-bootstrap';
import Games from './Games';
// import { CREATE_GAME } from '../utils/mutations';
// import { useMutation } from '@apollo/client';

// const Dashboard = () => {
//   const [userFormData, setUserFormData] = useState({ title: '', profile: '' });
//   const [validated] = useState(false);
//   const [showAlert, setShowAlert] = useState(false);
//   const [createGame, {error}] = useMutation(CREATE_GAME);

//   useEffect(() => {
//     if (error) {
//       setShowAlert(true);
//     } else {
//       setShowAlert(false);
//     }
//   }, [error]);

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setUserFormData({ ...userFormData, [name]: value });
//   };
  
//   const handleFormSubmit = async (event)=>{
//     event.preventDefault();
//     const form = event.currentTarget;
//     if (form.checkValidity() === false) {
//       event.preventDefault();
//       event.stopPropagation();
//     }
//     try{
//         const {data} = await createGame({
//             variables: { userFormData }
//         })
//         console.log("success!");
//     } catch(err){
//         console.log(err);
//     }
//     setUserFormData({
//       title: '',
//       profile: '',
//     });
// }

//   return (
//     <>
//     <div>
//       <Games />
//       <h1>Dashboard</h1>
//       <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
//       <Alert
//           dismissible
//           onClose={() => setShowAlert(false)}
//           show={showAlert}
//           variant="danger"
//         >
//           Something went wrong with your game!
//         </Alert>
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//       <Form.Control 
//           type="text"
//           placeholder="Title"
//           name="title"
//           onChange={handleInputChange}
//           value={userFormData.title}
//           required
//         />
//         <Form.Control 
//           type="text"
//           placeholder="Profile"
//           name="profile"
//           onChange={handleInputChange}
//           value={userFormData.profile}
//           required
//         />
//         {/* <Button  
//         disabled={!(userFormData.title && userFormData.profile)}
//         variant="info" type="submit">
//         Submit
//       </Button> */}
//       </Form.Group>
//       </Form>
     
//       <button variant="info">Create Game</button>
//     </div>
//     </>
//   );
// };

// export default Dashboard;


import React, { useState, useEffect} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "../styles/Login.css"
import { useMutation } from '@apollo/client';
import { CREATE_GAME } from '../utils/mutations';
import {Alert} from 'react-bootstrap';

const Dashboard = () => {
  const [userFormData, setUserFormData] = useState({ title: '', profile: '' });
  const [userData, setUserData] = useState({title: '', profile: ''});
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const [createGame, { error }] = useMutation(CREATE_GAME);

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
      const { data } = await createGame({
        variables: { ...userFormData },
      });

      console.log(data);
      
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
      <Games />
    <div className="login-form">
      <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
      <Alert
          dismissible
          onClose={() => setShowAlert(false)}
          show={showAlert}
          variant="danger"
        >
          Something went wrong with your game profile!
        </Alert>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Title</Form.Label>
        <Form.Control 
          type="text"
          placeholder="title"
          name="title"
          onChange={handleInputChange}
          value={userFormData.title}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Profile</Form.Label>
        <Form.Control
            type="text"
            placeholder="profile"
            name="profile"
            onChange={handleInputChange}
            value={userFormData.profile}
            required
          />
      </Form.Group>
      {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
        {/* <Form.Check type="checkbox" label="Check me out" /> */}
      {/* </Form.Group> */} 
      <Form.Control.Feedback type="invalid">
            Profile is required!
          </Form.Control.Feedback>
      <Button  
        disabled={!(userFormData.title && userFormData.profile)}
        variant="info" type="submit">
        Submit
      </Button>
      <br></br>
    </Form>
    </div>
    </>
  );
};

export default Dashboard;
