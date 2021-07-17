import React from 'react'
import { Header, Image, Segment, Icon, Input, Grid, Form, Button } from 'semantic-ui-react'
import { Redirect } from 'react-router-dom'
import Auth from '../utils/auth'







const Mainpage = () => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;
  if(!token){
    return <Redirect to="/login" />;
  }

    
   
return(
<div>

{/* FULL SCREEN  */}

<Header textAlign='center' as='h1'>
        <Image src="busicon.png" alt="Bus" />
        PICK-UP LIST
      <Header.Subheader>
      Manage your route below.
     </Header.Subheader>
    </Header>

    <Segment inverted color='yellow'>
        <Header as='h2' textAlign='center'>
        Bus Number
        </Header>
        <Header as='h4' textAlign='center'>
        <Input action='Submit' placeholder='Enter Bus Number' />
        </Header>
    </Segment>


<Grid celled>
    <Grid.Row>
      <Grid.Column width={5}>
      <Segment raised>
      <Header textAlign='center' as='h3'>
        STOP NAME  
        <i padding="a lot" class="circular map signs icon"></i>
    </Header>
    <Segment>
    <Header textAlign='center' as='h3'>
        First Street
    </Header>
    </Segment>
</Segment>
      </Grid.Column>
      <Grid.Column width={11}>
      <Segment.Group>
      <h2 class="ui center aligned icon header">
  <i class="circular users icon"></i>
  STUDENTS
</h2>
    <Segment color = 'yellow' padded textAlign='center'>Student Name 1</Segment>
    <Segment color = 'black' padded textAlign='center'>Student Name 2</Segment>
    <Segment color = 'yellow' padded textAlign='center'>Student Name 3</Segment>
    <Segment color = 'black' padded textAlign='center'>Student Name 4</Segment>
    <Segment color = 'yellow' padded textAlign='center'>Student Name 5</Segment>
  </Segment.Group>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column color="yellow" width={2}>
      <Button icon basic color="black">
            <Icon size="huge" basic color="black" name='arrow alternate circle left outline' />
        </Button>
      </Grid.Column>
      <Grid.Column color="yellow" width={12}>
      </Grid.Column>
      <Grid.Column color="yellow" width={2}>
      <Button icon basic color="black">
            <Icon size="huge" basic color="black" name='arrow alternate circle right outline' />
        </Button>
      </Grid.Column>
    </Grid.Row>
  </Grid>



{/* MOBILE VIEW */}

    <Header textAlign='center' as='h1'>
        <Image src="busicon.png" alt="Bus" />
        PICK-UP LIST
      <Header.Subheader>
      Manage your route below.
     </Header.Subheader>
    </Header>

<Segment raised inverted color='yellow'>
        <Header as='h2' textAlign='center'>
        Bus Number
        </Header>
        <Header as='h4' textAlign='center'>
        <Input action='Submit' placeholder='Enter Bus Number' />
        </Header>
    </Segment>

{/* <Segment raised>
    <Header textAlign='center' as='h3'>
        Stop Name
    </Header>
</Segment> */}

<Segment raised>
<Header textAlign='center' as='h3'>
        STOP NAME  
        <i padding="a lot" class="circular map signs icon"></i>
    </Header>
    <Segment raised>
    <Header textAlign='center' as='h3'>
        First Street
    </Header>
    </Segment>
</Segment>



<Segment.Group raised>
<h3 class="ui center aligned icon header">
  <i class="circular users icon"></i>
  STUDENTS
</h3>
    <Segment color = 'yellow' padded textAlign='center'>Student Name 1</Segment>
    <Segment color = 'black' padded textAlign='center'>Student Name 2</Segment>
    <Segment color = 'yellow' padded textAlign='center'>Student Name 3</Segment>
    <Segment color = 'black' padded textAlign='center'>Student Name 4</Segment>
    <Segment color = 'yellow' padded textAlign='center'>Student Name 5</Segment>
  </Segment.Group>

  <Segment.Group raised horizontal>
    <Segment inverted color="yellow">
    <Button icon basic color="black">
            <Icon size="huge" basic color="black" name='arrow alternate circle left outline' />
    </Button>
    </Segment>
    <Segment inverted color="yellow">
        <Header textAlign='center' as='h2'>
        </Header>
    </Segment>
    <Segment inverted color="yellow" textAlign="right">
        <Button icon basic color="black">
            <Icon size="huge" basic color="black" name='arrow alternate circle right outline' />
        </Button>
    </Segment>
  </Segment.Group>


  {/* <Grid.Row>
      <Grid.Column color="yellow" width={2}>
      <Button icon basic color="black">
            <Icon size="huge" basic color="black" name='arrow alternate circle left outline' />
        </Button>
      </Grid.Column>
      <Grid.Column color="yellow" width={12}>
      </Grid.Column>
      <Grid.Column color="yellow" width={2}>
      <Button icon basic color="black">
            <Icon size="huge" basic color="black" name='arrow alternate circle right outline' />
        </Button>
      </Grid.Column>
    </Grid.Row> */}

</div>
)
}




export default Mainpage;