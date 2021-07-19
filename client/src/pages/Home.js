import { createMedia } from '@artsy/fresnel'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Image,
  Segment,
  Reveal,
} from 'semantic-ui-react';



const HomepageLayout = () => (
  <Container >
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
        <div>
         <Container as='h1' style={{ fontSize: '4.33em' }} textAlign='center'>BUS TRACKER</Container>
         <Divider horizontal>Find out more...</Divider>
        </div>
          <Grid.Column width={8}>
            <Header color='yellow' as='h3' style={{ fontSize: '2em' }}>
              Track That Bus
            </Header>
            <p style={{ fontSize: '1.33em' }} >
              A mobile friendly bus tracking application for bus drivers and admin. Track your route in real time & don't let mechanical issues get you down!
            </p>
            <li>
              View a roster of the students on your route
            </li>
            <li>
              Keep a running attendance
            </li>
            <li>
              Report mechanical issues in real time
            </li>
            <li>
              View a report of outstanding route issues
            </li>
            <Header color='yellow' as='h3' style={{ fontSize: '2em' }}>
              Route Tracking Has Never Been Easier
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              Sign up today by clicking the button below. If you're an existing user please login above. 
            </p>
          </Grid.Column>
          <Grid.Column floated='right' width={6}>
          <Reveal animated='rotate'>
    <Reveal.Content visible>
      <Image circular size='large' src='busiconnontransparent.png' />
    </Reveal.Content>
    <Reveal.Content hidden>
      <Image circular size='medium' src='boy.png' />
    </Reveal.Content>
  </Reveal>
          </Grid.Column >
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign='center'>
            <Button as ={ Link } to='/signup' color='yellow' size='huge'>Sign Up</Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment style={{ padding: '0em' }} vertical>
      <Grid celled='internally' columns='equal' stackable>
        <Grid.Row textAlign='center'>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              "I love being able to track my bus."
            </Header>
            <p style={{ fontSize: '1.33em' }}>-Bus Driver</p>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              "This Bus Tracker is the best thing since sliced bread."
            </Header>
            <p style={{ fontSize: '1.33em' }} >-Bus Driver</p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>


  </Container>
)

export default HomepageLayout