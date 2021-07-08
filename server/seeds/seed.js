const db = require('../config/connection.js');
const { Bus, Stop, Student, Breakdown, User } = require('../models');

const busData = require('./busData.json');
const stopData = require('./stopData.json');
const studentData = require('./studentData.json');
const breakdownData = require('./breakdownData.json');
const userData = require('./userData.json');


db.once('open', async () => {
  // clean database
  await User.deleteMany({})
  await Bus.deleteMany({});
  await Stop.deleteMany({});
  await Student.deleteMany({});
  await Breakdown.deleteMany({});


  // bulk create each model
  const buses = await Bus.insertMany(busData);
  console.log(buses);
  const stops = await Stop.insertMany(stopData);
  console.log(stops)
  const students = await Student.insertMany(studentData);
  console.log(students);
  const breakdowns = await Breakdown.insertMany(breakdownData);
  console.log(breakdowns);

  const user = await User.insertMany(userData);
  console.log(user);
  console.log('all done!');
  process.exit(0);
});