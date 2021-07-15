import React from 'react';
import { useLocation, useHistory, Link } from 'react-router-dom';
import { Container, List, Grid, Header, Button, Segment } from 'semantic-ui-react'

const Footer = () => {
  const location = useLocation();
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
            <List link inverted>
              <List.Item as='a'>Sign Up</List.Item>
              <List.Item as='a'>Login</List.Item>
              <List.Item as='a'></List.Item>
              <List.Item as='a'></List.Item>
              <Button color='yellow' content='Go Back' onClick={() => history.goBack()}>
          </Button>
            </List>
          </Grid.Column>
          <Grid.Column width={3}>
            <Header style={{ color:'#FFE082'}}inverted as='h4' content='Contributors' />
            <List link inverted>
              <List.Icon name='github' size='large' verticalAlign='middle' />
              <List.Item as='a'href='https://github.com/Vinyl77'>Stevenson White II</List.Item>
              <List.Item as='a'>DNA FAQ</List.Item>
              <List.Item as='a'>How To Access</List.Item>
              <List.Item as='a'>Favorite X-Men</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={7}>
            <Header style={{ color:'#FFE082'}} as='h1' inverted>
              Bus Tracker
            </Header>
            <p>
              Extra space for a call to action inside the footer that could help re-engage users.
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>

  </Segment>

   

   
  );
};

export default Footer;
