import React from 'react';
import { useQuery } from '@apollo/client';
import {  UNASSIGNED_STUDENTS } from '../utils/queries';
// import BreakdownList from '../components/BreakdownList';
import UnassignedList from '../components/UnassignedList';
import { Redirect } from 'react-router-dom';
import Auth from '../utils/auth';


const Unassigned = () => {
  const { loading, data: studentData } = useQuery( UNASSIGNED_STUDENTS );
  const students  = studentData?.unassignedStudents || [];
  const token = Auth.loggedIn() ? Auth.getToken() : null;
  if(!token){
    return <Redirect to="/login" />;
  }


  return (
    <main>
      <div className="flex-row justify-center">
        <div className="col-12 col-md-10 my-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <UnassignedList
              students={students}
              title="Here's the current list of students that need to be picked up"
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Unassigned;
