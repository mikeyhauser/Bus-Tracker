const { AuthenticationError } = require('apollo-server-express');
const { Bus, Stop, Student, Breakdown, User } = require('../models');

const { signToken } = require('../utils/auth');


const resolvers = {
    Query: {
        user: async ()=> {
            return await User.find({})
        },
        buses: async () => {
            return await Bus.find({});
        },
        stops: async () => {
            return await Stop.find({});
        },
        students: async () => {
            return await Student.find({});
        },
        breakdowns: async () => {
            return await Breakdown.find({});
        },

        currentStop: async (parent, { order, route }) => {
            const busStop = await Stop.findOne({ order: order, route: route }
            );
            return busStop;
        },

        currentRoster: async (parent, { busNumber }) => {
            const busStop = await Student.find({ busNumber: busNumber }
            );
            return busStop;
        },

        unassignedStudents: async (parent, { isRunning }) => {
            const downedBus = await Bus.find({ isRunning: isRunning }
            );
            return downedBus;
        }

        
        


    },

    Mutation: {

        // **richard code below
addUser: async (parent, args) => {
          const user = await User.create(args);
          const token = signToken(user);
    
          return { token, user };
        },
        login: async (parent, { email, password }) => {
          const user = await User.findOne({ email });
    
          if (!user) {
            throw new AuthenticationError('Incorrect credentials');
          }
    
          const correctPw = await user.isCorrectPassword(password);
    
          if (!correctPw) {
            throw new AuthenticationError('Incorrect credentials');
          }
    
          const token = signToken(user);
          return { token, user };
        },


        // richard code above
        // mikey code below


        addBreakdown: async (parent, { busNumber, mechanicalProblem, dateOfBreakdown }) => {
          return Breakdown.create({ busNumber, mechanicalProblem, dateOfBreakdown });
        },

       

          studentStatus: async (parent, { name, missedBus }) => {
            return Student.findOneAndUpdate(
              { name: name },
              { missedBus: missedBus }
            );
          },
          busStatus: async (parent, { busNumber, isRunning }) => {
            return Bus.findOneAndUpdate(
              { busNumber: busNumber },
              { isRunning: isRunning },
              {
                new: true
              }
            );
          }
    }
};




module.exports = resolvers;
