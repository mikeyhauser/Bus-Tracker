const { gql } = require('apollo-server-express');

const typeDefs = gql`
  

type Driver {
  driver: User
}
type Auth{
  token: ID!
  user: User
}

type User{
    _id: ID!
    username: String!
    email: String
    
  }
  type Bus {
    _id: ID
    busNumber: Int
    stops: Int
    students: [String]
    isRunning: Boolean
    engineHours: Int
    daysToService: Int
  }
    type Stop{
        students: [String]
        _id: ID
        route: Int
        location: String
        order: Int
    }
    type Student{
        _id: ID
        name: String
        busNumber: Int
        missedBus: Boolean
        contact: String
    }
    type Breakdown{
        _id: ID
        busNumber: Int
        mechanicalProblem: String
        dateOfBreakdown: String
        assignedMechanic: String
        partsOrdered: Boolean
        projectedCompletion: String
    }
    type Query {
        user: [User]
        buses: [Bus]
        stops: [Stop]
        students: [Student]
        breakdowns: [Breakdown]
      
        currentStop(order: Int!, route: Int!): Stop

        currentRoster(busNumber: Int!): [Student]
        unassignedStudents(isRunning: Boolean!): [Bus]

    }
    type Mutation {

      login(email: String!, password: String!):Auth
      addUser(username: String!, email: String!, password: String!):Auth
     

      addBreakdown(busNumber: Int!, mechanicalProblem: String!, dateOfBreakdown: String!): Breakdown

      studentStatus(name: String!, missedBus: Boolean): Student

      busStatus(busNumber: Int!, isRunning: Boolean): Bus



    }


    `
    module.exports = typeDefs;