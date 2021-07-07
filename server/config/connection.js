const mongoose = require('mongoose');

<<<<<<< HEAD
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/bustrackerdb',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

module.exports = mongoose.connection;
=======
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/bus-tracker', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

module.exports = mongoose.connection;
>>>>>>> 3e9b66d66cd31f254a15ec4f54d60706797c95e0
