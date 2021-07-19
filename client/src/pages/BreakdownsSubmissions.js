import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { REPORT_BREAKDOWN, BUS_STATUS } from '../utils/mutations'
import { Container, Form, TextArea, Header, Image, Input, Button } from 'semantic-ui-react'
import { Redirect } from 'react-router-dom';
import Auth from '../utils/auth';



function BreakdownSubmissions() {
    const [busNumber, setBus] = useState(0);
    const [mechanicalProblem, setProblem] = useState('');
    const [dateOfBreakdown, setDate] = useState('');
    const [submitBreakdown, { error }] = useMutation(REPORT_BREAKDOWN);
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(busNumber, mechanicalProblem, dateOfBreakdown)
    
        try {
          const { data } = await submitBreakdown({
            variables: { busNumber, mechanicalProblem, dateOfBreakdown },
          });
    
          window.location.reload();
        } catch (err) {
          console.error(err);
        }
      };

      const token = Auth.loggedIn() ? Auth.getToken() : null;
if(!token){
  return <Redirect to="/login" />;
}
    return <div>
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
            <Input
                fluid icon='bus'
                placeholder='Enter bus number here...'
                value={busNumber}
                name="busNumber"
                type="number"
                onChange={e=>setBus(parseInt(e.target.value))}
            />
            <Header>
                Date
</Header>
            <Input fluid icon='calendar alternate outline' placeholder='MM - DD - YYYY'
                value={dateOfBreakdown}
                name="dateOfBreakdown"
                type="string"
                onChange={e=>setDate(e.target.value)}
            />
            <Header>
                Issue
</Header>
            <Form>
                <TextArea placeholder='Please provide a brief description of the issue'
                    value={mechanicalProblem}
                    name="mechanicalProblem"
                    type="string"
                    onChange={e=>setProblem(e.target.value)}
                />
            </Form>
            <Button fluid compact color='yellow'
            onClick={() => submitBreakdown({ variables: { busNumber: busNumber, mechanicalProblem: mechanicalProblem, dateOfBreakdown: dateOfBreakdown} }
                )}
            >Submit</Button>
        </Container>
    </div>
}
export default BreakdownSubmissions;