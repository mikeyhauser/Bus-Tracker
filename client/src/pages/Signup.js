import React, { useState, useEffect } from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import { useMutation } from '@apollo/react-hooks';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';

const SignUpForm = () => {
  
  const [userFormData, setUserFormData] = useState({ username: '', email: '', password: '' });
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
      Auth.login(data.addUser.token);
    } catch (err) {
      console.error(err);
    }

    setUserFormData({
      username: '',
      email: '',
      password: '',
    });
  };
  
  return (
  <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='teal' textAlign='center'>
        <Image src="busicon.png" alt="Bus Icon" /> Sign Up for your account
      </Header>
      <Form validated={validated} onSubmit={handleFormSubmit} size='large'>
    
        <Segment stacked>
          <Form.Input 
          fluid icon='smile outline' 
          type = 'text'
          onChange = {handleInputChange}
          value={userFormData.username}
          iconPosition='left' 
          placeholder='Username' 
          name  = 'username'
          required
          />
          <Form.Input 
          fluid icon='user' 
          iconPosition='left' 
          placeholder='E-mail address' 
          name = 'email'
          onChange ={handleInputChange}
          value = {userFormData.email}
          required

          />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
            name = 'password'
            onChange = {handleInputChange}
            value = {userFormData.password}
            required
          />

          <Button  disabled={!(userFormData.username && userFormData.email && userFormData.password)}
          type='submit'color='teal' fluid size='large'>
            Signup
          </Button>
        </Segment>
      </Form>
      <Message>
        Already a user? <a href='#'>Login</a>
      </Message>
    </Grid.Column>
  </Grid>
 )
}

export default SignUpForm