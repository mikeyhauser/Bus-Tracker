const db = require('../config/connection.js');
const { Bus, Stop, Student, Breakdown } = require('../models');

const busData = require('./busData.json');
const stopData = require('./stopData.json');
const studentData = require('./studentData.json');
const breakdownData = require('./breakdownData.json');


db.once('open', async () => {
  // clean database
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

  console.log('all done!');
  process.exit(0);
});
