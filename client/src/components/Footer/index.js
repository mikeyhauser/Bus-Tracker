import React from 'react';
import { useLocation, useHistory, Link } from 'react-router-dom';
import { Container, List, Grid, Header, Button, Segment } from 'semantic-ui-react'

const Footer = () => {
  // const location = useLocation();
  const history = useHistory();
  return (
    // <footer className="w-100 mt-auto bg-secondary p-4">
    //   <div className="container text-center mb-5">
    //     {location.pathname !== '/' && (
    //       <button
    //         className="btn btn-dark mb-3"
    //         onClick={() => history.goBack()}
    //       >
    //         &larr; Go Back
    //       </button>
    //     )}
    //     <h4>
    //       Made with{' '}
    //       <span
    //         className="emoji"
    //         role="img"
    //         aria-label="heart"
    //         aria-hidden="false"
    //       >
    //         ❤️
    //       </span>{' '}
    //       Mikey, Richard, Stevenson, and Hannah.
    //     </h4>
    //   </div>
    // </footer>

    <Segment inverted vertical style={{ padding: '5em 0em', color:'#FFE082' }}>
    <Container>
      <Grid divided inverted stackable>
        <Grid.Row>
          <Grid.Column width={3}>
            <Header inverted as='h4' content='Navigation' style={{ color:'#FFE082'}}/>
            <List style={{ color:'#FFE082'}}link inverted>
              <List.Item style={{ color:'#FFE082'}}as={Link} to='/signup'>Sign Up</List.Item>
              <List.Item style={{ color:'#FFE082'}}as={Link} to='/login'>Login</List.Item>
              <List.Item style={{ color:'#FFE082'}}as={Link} to='/'>Home</List.Item>
              <List.Item style={{ color:'#FFE082'}}as='a'>Contact</List.Item>
              <Button color='yellow' content='Go Back' onClick={() => history.goBack()}>
          </Button>
            </List>
          </Grid.Column>
          <Grid.Column width={3}>
            <Header style={{ color:'#FFE082'}}inverted as='h4' content='Contributors' />
            <List link inverted>
              <List.Icon style={{ color:'#FFE082'}}name='github' size='large' verticalAlign='middle' />
              <List.Item style={{ color:'#FFE082'}}as='a'href='https://github.com/sawhite110' target='blank'>Stevenson White II</List.Item>
              <List.Item style={{ color:'#FFE082'}}as='a'href='https://github.com/Hannybiggs' target='blank'>Hannah Biggam</List.Item>
              <List.Item style={{ color:'#FFE082'}}as='a'href='https://github.com/mikeyhauser'target='blank'>Mikey Hauser</List.Item>
              <List.Item style={{ color:'#FFE082'}}as='a'href='https://github.com/Vinyl77' target='blank'>Richard Yvarra</List.Item>
              <List.Item style={{ color:'#FFE082'}} as='a'href='https://github.com/mikeyhauser/Bus-Tracker' target='blank'>Bus Tracker Repository</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={7}>
            <Header style={{ color:'#FFE082'}} as='h1' inverted>
              Bus Tracker
            </Header>
            <p>
              The wheels on the bus go round and round.
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>

  </Segment>

   

   
  );
};

export default Footer;






// Alternative style 

{/* <Segment inverted vertical style={{ padding: '5em 0em' }}>
<Container>
  <Grid divided inverted stackable>
    <Grid.Row>
      <Grid.Column width={3}>
        <Header inverted as='h4' content='About' />
        <List link inverted>
          <List.Item as='a'>Sitemap</List.Item>
          <List.Item as='a'>Contact Us</List.Item>
          <List.Item as='a'>Religious Ceremonies</List.Item>
          <List.Item as='a'>Gazebo Plans</List.Item>
        </List>
      </Grid.Column>
      <Grid.Column width={3}>
        <Header inverted as='h4' content='Services' />
        <List link inverted>
          <List.Item as='a'>Banana Pre-Order</List.Item>
          <List.Item as='a'>DNA FAQ</List.Item>
          <List.Item as='a'>How To Access</List.Item>
          <List.Item as='a'>Favorite X-Men</List.Item>
        </List>
      </Grid.Column>
      <Grid.Column width={7}>
        <Header as='h4' inverted>
          Footer Header
        </Header>
        <p>
          Extra space for a call to action inside the footer that could help re-engage users.
        </p>
      </Grid.Column>
    </Grid.Row>
  </Grid>
</Container>
</Segment> */}