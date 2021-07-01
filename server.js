const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3001;

const db = require("./server/models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/populatedb", { useNewUrlParser: true });

app.get("/bus", (req, res) => {
  db.Bus.find({})
    .then(dbBus => {
      res.json(dbBus);
    })
    .catch(err => {
      res.json(err);
    });
});
app.get("/stop", (req, res) => {
    db.Stop.find({})
      .then(dbStop => {
        res.json(dbStop);
      })
      .catch(err => {
        res.json(err);
      });
  });

app.get("/student", (req, res) => {
  db.Student.find({})
    .then(dbStudent => {
      res.json(dbStudent);
    })
    .catch(err => {
      res.json(err);
    });
});

app.post("/submitstudent", ({ body }, res) => {
  db.Student.create(body)
    .then(dbStudent => {
      res.json(dbStudent);
    })
    .catch(err => {
      res.json(err);
    });
});

app.post("/submitbus", ({ body }, res) => {
    db.Bus.create(body)
      .then(dbBus => {
        res.json(dbBus);
      })
      .catch(err => {
        res.json(err);
      });
  });

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

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
