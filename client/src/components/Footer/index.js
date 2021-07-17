import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const history = useHistory();
  return (
    <footer className="w-100 mt-auto bg-secondary p-4">
      <div className="container text-center mb-5">
        {location.pathname !== '/' && (
          <button
            className="btn btn-dark mb-3"
            onClick={() => history.goBack()}
          >
            &larr; Go Back
          </button>
        )}
        <h4>
          Made with{' '}
          <span
            className="emoji"
            role="img"
            aria-label="heart"
            aria-hidden="false"
          >
            ❤️
          </span>{' '}
          Mikey, Richard, Stevenson, and Hannah.
        </h4>
      </div>
    </footer>
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