// import React from 'react'
// import { List, Header, Segment, Input } from 'semantic-ui-react'
// import { useQuery } from '@apollo/client';
// import { CURRENT_ROSTER } from '../utils/queries'
// import { Redirect } from 'react-router-dom';
// import Auth from '../utils/auth';


// const RosterStatus = () => {

//   const { loading, data } = useQuery(CURRENT_ROSTER, {
//     variables: { busNumber: 332 }
//   })
//   const token = Auth.loggedIn() ? Auth.getToken() : null;
//   if(!token){
//     return <Redirect to="/login" />;
//   }

//   // const roster = data?.roster || [];
//   console.log(data)

//   const renderStudents = () => {
//     console.log(data)
//     return data.currentRoster.map((s) => {
//       return <List>
//                 <List.Content>
//                   <List.Header>{s.name}</List.Header>
//                   Contact:{s.contact}
//                 </List.Content>
//               </List>
//     })
//   };

//   if (data === undefined) {
//     return <h1>{loading}</h1>
//   }
//   return <div>
//     <Input action='submit' placeholder='Enter Bus Here'/>
//     <Header block>ROSTER STATUS:</Header>
//     <Segment>

//       <List celled> {renderStudents()} </List>

//     </Segment>
//   </div>
// }
// export default RosterStatus



import React, { useState } from 'react';
import { List, Header, Segment, Button, Input } from 'semantic-ui-react'
import { useLazyQuery } from '@apollo/client';
import { CURRENT_ROSTER  } from '../utils/queries'
import { Redirect } from 'react-router-dom';
import Auth from '../utils/auth';
function RosterStatus () {
    const [busNumber, setBus] = useState(0);
    const [search, {loading, data}] = useLazyQuery(CURRENT_ROSTER);
  const token = Auth.loggedIn() ? Auth.getToken() : null;
  if(!token){
    return <Redirect to="/login" />;
  }
    console.log(data)
    const searchData = data?.currentRoster || [];
  return <div>
      
      <Header  style={{ paddingTop:'5rem'}}>
                Bus Number
</Header>
      <div className="form">
        <Input
          value={busNumber}
          name="busNumber"
          onChange={e=>setBus(parseInt(e.target.value))}
          type="number"
          placeholder="Enter Your Bus"
        />
       
        <Button color='yellow' onClick={() => search({ variables: { busNumber: busNumber} }
        )}>SUBMIT
          </Button>
      </div>
    <Header block>ROSTER STATUS:</Header>
    <Segment>
    {searchData &&
          searchData.map((Student) => (
            <div key={Student._id} className="col-12 col-xl-6">
              <Segment color = 'yellow' padded textAlign='center'>Student: {Student.name}</Segment>
            
            </div>
          ))}
    </Segment>
  </div>
}
export default RosterStatus