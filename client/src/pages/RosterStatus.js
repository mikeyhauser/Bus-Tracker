import React from 'react'
import { Card, Header } from 'semantic-ui-react'
import { useQuery } from '@apollo/react-hooks';
import { CURRENT_ROSTER} from '../utils/queries'
// import Auth from '../utils/auth';


const rosterStatus = () => {
    // const { loading, data} = useQuery(query)

return (

   
<Card.Group>
<Header as='h1' block textAlign='right'>Roster Status</Header>
<Card fluid color='Yellow' header='Option 1' />
<Card fluid color='yellow' header='Option 2' />
<Card fluid color='yellow' header='Option 3' />

</Card.Group>

) 
}
export default rosterStatus
