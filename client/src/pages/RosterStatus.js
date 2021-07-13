import React from 'react'
import { List, Header } from 'semantic-ui-react'
import { useQuery } from '@apollo/react-hooks';
import { CURRENT_ROSTER} from '../utils/queries'
// import Auth from '../utils/auth';


const RosterStatus = () => {
    const { loading, data} = useQuery(CURRENT_ROSTER)
    const roster = data?.roster || [];



return (

   
<List>
<Header as='h1' block> Roster Status </Header>
  
  <List.Item>
    
    
  </List.Item>
  
</List>
  


) 
}
export default RosterStatus
