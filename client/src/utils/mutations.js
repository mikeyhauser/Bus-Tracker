import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

//creates a breakdown report
export const REPORT_BREAKDOWN = gql`
    mutation reportBreakdown ($busNumber: Int!, $mechanicalProblem: String!, $dateOfBreakdown: String!) {
      addBreakdown(busNumber: $busNumber, mechanicalProblem: $mechanicalProblem, dateOfBreakdown: $dateOfBreakdown) {
        _id
        
      }
    }
  `;

//Change students missedBus boolean value
export const STUDENT_STATUS = gql`
    mutation studentStatus ($name: String!, $missedBus: Boolean!) {
      studentStatus(
        name: $name,
        missedBus: $missedBus){
      name
      missedBus
      }
    }
`;

//Changes bus isRunning boolean value
export const BUS_STATUS = gql`
mutation busStatus ($busNumber: Int!, $isRunning: Boolean!) {
  busStatus(
    busNumber: $busNumber,
    isRunning: $isRunning
    )
    {
busNumber
isRunning
}
}
`;