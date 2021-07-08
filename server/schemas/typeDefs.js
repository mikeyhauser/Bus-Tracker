const { gql } = require('apollo-server-express');

const typeDefs = gql`
  

type Mutation{
  login(email: String!, password: String!):Auth
  addUser(username: String!, email: String!, password: String!):Auth
 

}
type User{
    id: ID!
    username: String!
    email: String
    
  }
  type Bus {
    _id: ID
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
        buses: [Bus]
        stops: [Stop]
        students: [Student]
        breakdowns: [Breakdown]
        user: [User]
      }
    type Driver {
      driver: User
    }

    type Auth{
      token: ID!
      user: User
    }
    `
    module.exports = typeDefs;