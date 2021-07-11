import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

const SignUpForm = () => (
  <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='teal' textAlign='center'>
        <Image src="busicon.png" alt="Bus Icon" /> Sign Up for your account
      </Header>
      <Form size='large'>
        <Segment stacked>
          <Form.Input fluid icon='smile outline' iconPosition='left' placeholder='Username' />
          <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
          />

          <Button color='teal' fluid size='large'>
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

export default SignUpForm