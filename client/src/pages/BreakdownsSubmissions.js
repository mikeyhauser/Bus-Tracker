import React from 'react'
import { Container, Form, TextArea, Header, Image, Input, Button } from 'semantic-ui-react'


const BreakdownSubmissions = () => (
<Container>
    <Header textAlign='center' as='h1'>
        <Image src="busicon.png" alt="Bus" />
        BREAKDOWN SUBMISSION
      <Header.Subheader>
      Enter your mechanical issue below.
     </Header.Subheader>
    </Header>
    <Header>
    Bus Number
</Header>
    <Input fluid icon='bus' placeholder='Enter bus number here...' />

    <Header>
    Date
</Header>
    <Input fluid icon='calendar alternate outline' placeholder='MM - DD - YYYY' />

<Header>
    Issue
</Header>
    <Form>
        <TextArea placeholder='Please provide a brief description of the issue' />
    </Form>

    <Button  fluid compact color='yellow'>Submit</Button>
</Container>

)


export default BreakdownSubmissions;