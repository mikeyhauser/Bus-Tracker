
const { Bus, Stop, Student, Breakdown } = require('../models');
const orderNumber = 1


const resolvers = {
    Query: {
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

        // currentStop: async (parent, {  stopId }) => {
        //     const busStop = await Stop.findOne({_id: stopId });
        //     return busStop;
        //     },

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

        
        


        // profile: async (parent, { profileId }) => {
        //     return Profile.findOne({ _id: profileId });
        //   },


    },

    Mutation: {
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
              { isRunning: isRunning }
            );
          }
    }
};

module.exports = resolvers;