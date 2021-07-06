const { gql } = require('apollo-server-express');

const typeDefs = gql`
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
      }
    `
    module.exports = typeDefs;