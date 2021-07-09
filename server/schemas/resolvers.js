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
        }

    },
    Mutation: {
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
  }
//   chooseBus: async (parent, { busNumber }, context) => {
//     if (context.user) {
//       const updatedUser = await User.findByIdAndUpdate(
//         { _id: context.user._id },
//         { $push: { chooseBus: busNumber } },
//         { new: true }
//       );

//       return updatedUser;
//     }

//     throw new AuthenticationError('You need to be logged in!');
//   },

};



module.exports = resolvers;