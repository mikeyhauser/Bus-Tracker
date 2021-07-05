const express = require("express");
// const logger = require("morgan");
// const mongoose = require("mongoose");
const { ApolloServer } = require('apollo-server-express');

const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// const db = require("./models");

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});


// app.use(logger("dev"));



// app.use(express.static("public"));

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/bustrackerdb", { useNewUrlParser: true });

// app.get("/bus", (req, res) => {
//   db.Bus.find({})
//     .then(dbBus => {
//       res.json(dbBus);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });
// app.get("/stop", (req, res) => {
//     db.Stop.find({})
//       .then(dbStop => {
//         res.json(dbStop);
//       })
//       .catch(err => {
//         res.json(err);
//       });
//   });

// app.get("/student", (req, res) => {
//   db.Student.find({})
//     .then(dbStudent => {
//       res.json(dbStudent);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });

// app.post("/submitstudent", ({ body }, res) => {
//   db.Student.create(body)
//     .then(dbStudent => {
//       res.json(dbStudent);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });

// app.post("/submitbus", ({ body }, res) => {
//     db.Bus.create(body)
//       .then(dbBus => {
//         res.json(dbBus);
//       })
//       .catch(err => {
//         res.json(err);
//       });
//   });

// app.get("/populateduser", (req, res) => {
//   db.User.find({})
//     .populate("notes")
//     .then(dbUser => {
//       res.json(dbUser);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });

// app.listen(PORT, () => {
//   console.log(`App running on port ${PORT}!`);
// });
