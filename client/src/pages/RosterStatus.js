import React from 'react'
import { List, Header } from 'semantic-ui-react'
import { useQuery } from '@apollo/react-hooks';
import { CURRENT_ROSTER} from '../utils/queries'
// import Auth from '../utils/auth';


const RosterStatus = () => {
    const { loading, data} = useQuery(CURRENT_ROSTER, {
      variables:{busNumber: 332}
    })
    const roster = data?.roster || [];




console.log(data)

    const renderStudents = () => {
      console.log(data)
   return data.currentRoster.map((s) => {
   
        return <List.Item>{s.name}: {s.contact}</List.Item>

    })
  }

if(data === undefined){
  return <h1>Loading</h1>
}
  return <div>
    <Header>ROSTER STATUS:</Header>

      <List>{renderStudents()}</List>
    </div>

}
export default RosterStatus
