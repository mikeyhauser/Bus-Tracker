import React from 'react'
import { List, Header, Segment } from 'semantic-ui-react'
import { useQuery } from '@apollo/client';
import { CURRENT_ROSTER} from '../utils/queries'
import Auth from '../utils/auth';


const RosterStatus = () => {
    const { loading, data} = useQuery(CURRENT_ROSTER, {
      variables:{busNumber: 332}
    })
    // const roster = data?.roster || [];




console.log(data)

    const renderStudents = () => {
      console.log(data)
   return data.currentRoster.map((s) => {
   
         
        return<List>
            <List.Content>
                <List.Header>{s.name}</List.Header>
                  Contact:{s.contact}
                </List.Content>

            </List>

      

    })
 
}

if(data === undefined){
  return <h1>Loading</h1>
}
  return <div>
    <Header block>ROSTER STATUS:</Header>
    <Segment>

      <List celled> {renderStudents()} </List>
    
      </Segment>
    </div>

}
export default RosterStatus
