import { gql } from '@apollo/client';



// pull up students at current stop
export const CURRENT_STOP = gql`
  query stopQueue ($order: Int!, $route: Int!) {
  	currentStop(order: $order, route: $route){
    _id
    order
    route	
    students
  }
} 
`;
// pull up student roster on current buss
export const CURRENT_ROSTER = gql`
  query rosterQueue ($busNumber: Int!) {
    currentRoster(busNumber: $busNumber){
      _id
      name
      contact	
    }
  } 
`;

// pull students that belong to a 
// broken bus and need to be picked up
// by another running bus
export const UNASSIGNED_STUDENTS = gql`
query unassignedQueue {
  unassignedStudents(isRunning: false){
    students
    
  }
}
`;


export const CURRENT_BREAKDOWNS = gql`
query breakdownsQueue {
  breakdowns{
      _id
      busNumber
      mechanicalProblem
      dateOfBreakdown
  }
}
`;
