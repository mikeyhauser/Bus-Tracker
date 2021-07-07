  
const { Bus, Stop, Student, Breakdown } = require('../models');

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
        }

    }
};

module.exports = resolvers;