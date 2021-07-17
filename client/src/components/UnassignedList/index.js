import React from 'react';

const UnassignedList = ({ brokenBuses, title }) => {

  return (
    <div>
      <h3 className="text-primary">{title}</h3>
      <div className="flex-row justify-space-between my-4">
        {brokenBuses &&
          brokenBuses.map((brokenBus) => (
            <div key={brokenBus._id} className="col-12 col-xl-6">
                <h4 className="card-header bg-dark text-light p-2 m-0">
                  

                  {brokenBus.students[1]  }  <br/>
                  {brokenBus.students[2]  }  
                  <br/>
                  {brokenBus.students[3]  }  
                  <br/>
                  {brokenBus.students[4] } 
                  <br/> 
                  {brokenBus.students[5]  } 
                  <br/> 
                  {brokenBus.students[6] }  
                    <br/>
                    {brokenBus.students[7] }  
                    <br/>
                    {brokenBus.students[8] }  
                    <br/>
                  {/* Breakdown: {students.name} <br/> */}
             
                  {/* Assigned Mechanic: {assignedMechanic}<br/>
                  Parts Ordered: {partsOrdered}<br/>
                  Projected Completion: {projectedCompletion}<br/> */}
                



                  {/* <span className="text-white" style={{ fontSize: '1rem' }}>
                    currently has {breakdowns ? breakdowns.length : 0}{' '}
                    endorsed skill
                    {breakdowns.skills && profile.skills.length === 1 ? '' : 's'}
                  </span> */}
                </h4>
              
            </div>
          ))}
      </div>
    </div>
  );
};

export default UnassignedList;
