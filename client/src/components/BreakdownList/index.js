import React from 'react';

const BreakdownList = ({ breakdowns, title }) => {


  return (
    <div>
      <h3 className="text-primary">{title}</h3>
      <div className="flex-row justify-space-between my-4">
        {breakdowns &&
          breakdowns.map((breakdown) => (
            <div key={breakdown._id} className="col-12 col-xl-6">
              <div className="card mb-3">
                <h4 className="card-header bg-dark text-light p-2 m-0">
                  Bus Number: {breakdown.busNumber} <br/>
                  Breakdown: {breakdown.mechanicalProblem} <br/>
                  Date of Breakdown: {breakdown.dateOfBreakdown} <br/>
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
            </div>
          ))}
      </div>
    </div>
  );
};

export default BreakdownList;
