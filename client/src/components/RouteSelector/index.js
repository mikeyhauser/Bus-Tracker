import React, { useState } from 'react';
import { Header, Segment, Button } from 'semantic-ui-react'
import {  useLazyQuery, useMutation } from '@apollo/client';
import { CURRENT_STOP, MISSING_STUDENTS } from '../../utils/queries'
import {  STUDENT_STATUS } from '../../utils/mutations'
function RouteSelector() {
  let [stop, setStop] = useState(1);
  const [routeNumber, setRoute] = useState(0);
  const [search, {loading, data}] = useLazyQuery(CURRENT_STOP);
  const [missingStudents, { data: missingStudentsData}] = useLazyQuery(MISSING_STUDENTS);
  const [missedBus, { data: missedBusData}] = useMutation(STUDENT_STATUS);
  
  // ******stop selector below
  const nextStop = () => {
    setStop(parseInt(stop + 1));
    console.log(`Current Stop: ${stop}`);
    
  };
  const previousStop = () => {
    if (stop > 1) {
      setStop(parseInt(stop - 1));
      console.log(`Current Stop: ${stop}`);   
    }   
  };
  console.log(typeof(routeNumber))
  console.log(typeof(stop))
  const searchData = data?.currentStop || [];
  console.log(searchData)
  console.log(missedBusData)
  console.log(missingStudentsData)
  
  if (loading) return <p>Loading ...</p>;
  return (
    <div>
       <Header>
        BUS IN USE:
        </Header>
      <div className="form">
        <input
          value={routeNumber}
          name="busNumber"
          onChange={e=>setRoute(parseInt(e.target.value))}
          type="number"
          placeholder="Enter Your Bus"
        />
       
        <Button color='yellow' onClick={() => search({ variables: { order: parseInt(stop), route: routeNumber} }
        )}>SUBMIT
          </Button>
      </div>
     
      <div className="card text-center">
      <div className="card-body">
     
        <p className="card-text">CURRENT STOP: {stop}</p>
        <Header textAlign='center' as='h2'>
        {searchData.location}
    </Header>
      
      
        <Button color='yellow' className="btn btn-primary" type="button" onClick={previousStop}>
          PREVIOUS STOP
        </Button>
        <Button color='yellow' className="btn btn-primary" type="button" onClick={nextStop
        }>
          NEXT STOP
        </Button>
      
        <Segment.Group>
        {searchData.students &&
          searchData.students.map((student) => (
            <div key={student._id} className="col-12 col-xl-6">
              <Segment color = 'yellow' padded textAlign='center'>
                STUDENT: {student}
                
              <button onClick={() => missedBus({ variables: { name: student, missedBus: false} }
        )}>ON BUS
          </button>
          </Segment>
            
            </div>
          ))}
  </Segment.Group>
      </div>
    </div>
    </div>
    
  );
}
export default RouteSelector;