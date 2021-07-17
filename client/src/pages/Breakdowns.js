import React from 'react';
import { useQuery } from '@apollo/client';
import { CURRENT_BREAKDOWNS, UNASSIGNED_STUDENTS } from '../utils/queries';
import BreakdownList from '../components/BreakdownList';
import UnassignedList from '../components/UnassignedList';

// import UnassignedList from '../components/UnassignedList';


const Breakdowns = () => {
  // const { loading, data } = useQuery(CURRENT_BREAKDOWNS );
  // const breakdowns = data?.breakdowns || [];

  const { data: breakdownData, loading: breakdownLoading } = useQuery(CURRENT_BREAKDOWNS);
  const breakdowns = breakdownData?.breakdowns || [];
  // const breakdowns = data?.breakdowns || [];


  const { data: studentData, loading: studentLoading } = useQuery(UNASSIGNED_STUDENTS);
  const brokenBuses = studentData?.unassignedStudents || [];
  // console.log( "!!!!!!!!!!!!! students" +   JSON.stringify.studentData
  // )



  

  return (
    <main>
      <div className="flex-row justify-center">
        <div className="col-12 col-md-10 my-3">
          {breakdownLoading ? (
            <div>Loading...</div>
          ) : (
            <BreakdownList
            breakdowns={breakdowns}
              title="Here's the current list of breakdowns"
            />
          )}
        </div>
        <div className="col-12 col-md-10 my-3">
          {studentLoading ? (
            <div>Loading...</div>
          ) : (
            <UnassignedList
            brokenBuses={brokenBuses}
              title="Students without a ride"
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Breakdowns;
