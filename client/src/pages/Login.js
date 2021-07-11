import React, { useState, useEffect } from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment, Modal } from 'semantic-ui-react'
import { useMutation  } from '@apollo/react-hooks'
import { LOGIN_USER } from '../utils/mutations'
import Auth from '../utils/auth'


const LoginForm = () => {
  const [userFormData, setUserFormData] = useState({ email: '', password: '' });
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

    // check if form has everything (as per react-bootstrap docs)
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
      Auth.login(data.login.token);
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
  <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='teal' textAlign='center'>
        <Image src="busicon.png" alt="Bus Icon" /> Log-in to your account
      </Header>
      <Form noValidate validated={validated}onSubmit={handleFormSubmit} size='large'>
      {/* <Message color= 'red' dismissible onClose={() => setShowAlert(false)} show={showAlert}>
          Something went wrong with your login credentials!
        </Message> */}

        <Segment stacked>
          <Form.Input  
          fluid icon='user'
          iconPosition= 'left'
          placeholder='E-mail address' 
          type = 'text'
          name = 'email'
          onChange = {handleInputChange}
          value = {userFormData.email} 


          />
          <Form.Input
            fluid
            onChange={handleInputChange}
            value= {userFormData.password}
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
            name = 'password'
            required
          />

          <Button  color='teal' fluid size='large'>
            Login
          </Button>
          <Modal
      centered={false}
      open={showAlert}
      onClose={() => setShowAlert(false)}
      onOpen={() => setShowAlert(true)}
    
    >
      <Modal.Header>Uh Oh!</Modal.Header>
      <Modal.Content>
        <Modal.Description>
       Something Went Wrong With Your Credentials
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => setShowAlert(false)}>OK</Button>
      </Modal.Actions>
    </Modal>
  
        </Segment>
      </Form>
      <Message>
        New to us? <a href='#'>Sign Up</a>
      </Message>
    </Grid.Column>
  </Grid>
  
  ) 
}



export default LoginForm