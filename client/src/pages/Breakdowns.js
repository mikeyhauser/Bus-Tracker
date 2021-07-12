import React from 'react';
import { useQuery } from '@apollo/client';
import { CURRENT_BREAKDOWNS, UNASSIGNED_STUDENTS } from '../utils/queries';
import BreakdownList from '../components/BreakdownList';
// import UnassignedList from '../components/UnassignedList';


const Breakdowns = () => {
  const { loading, data } = useQuery(CURRENT_BREAKDOWNS );
  const breakdowns = data?.breakdowns || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div className="col-12 col-md-10 my-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <BreakdownList
              breakdowns={breakdowns}
              title="Here's the current list of breakdowns"
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Breakdowns;
