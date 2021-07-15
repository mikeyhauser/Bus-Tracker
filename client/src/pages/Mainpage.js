import React from 'react'
import { Header, Image, Segment, Icon } from 'semantic-ui-react'

const Mainpage = () => (
<div>
    <Header textAlign='center' as='h1'>
        <Image src="busicon.png" alt="Bus" />
        PICK-UP LIST
      <Header.Subheader>
      Manage your route below.
     </Header.Subheader>
    </Header>

<Segment raised>
    <Header textAlign='center' as='h2'>
        Stop Name
    </Header>
</Segment>


<Segment.Group raised horizontal>
    <Segment>
        <Icon name='arrow alternate circle left outline' size='big' />
    </Segment>
    <Segment>
        <Header textAlign='center' as='h2'>
        </Header>
    </Segment>
    <Segment>
        <Icon textAlign='right' name='arrow alternate circle right outline' size='big' />
    </Segment>
  </Segment.Group>


<Segment.Group>
    <Segment color = 'yellow' padded textAlign='center'>Student Name 1</Segment>
    <Segment color = 'black' padded textAlign='center'>Student Name 2</Segment>
    <Segment color = 'yellow' padded textAlign='center'>Student Name 3</Segment>
    <Segment color = 'black' padded textAlign='center'>Student Name 4</Segment>
    <Segment color = 'yellow' padded textAlign='center'>Student Name 5</Segment>
  </Segment.Group>

</div>
)



export default Mainpage;