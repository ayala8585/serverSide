var express = require('express');
var router = express.Router();
const jwt = require("jsonwebtoken");
//seminar
var urlToCreate = "mongodb://srv1:27017/substituteSystemDB";
var url = "mongodb://srv1:27017/";
//home
//var urlToCreate = "mongodb://localhost:27017/substituteSystemDB";
//var url = "mongodb://localhost:27017/";
var MongoClient = require('mongodb');

const TOKEN_SECRET =
  "F9EACB0E0AB8102E999DF5E3808B215C028448E868333041026C481960EFC126";

const generateAccessToken = (user) => {
  return jwt.sign(user, TOKEN_SECRET);
};

router.get("/createDB", (req, res) => {
  MongoClient.connect(urlToCreate, function (err, db) {
    console.log("err", err)
    // if (err) {
    //   console.error(err)
    // } else {
    //   console.log("Database created!");
    //   db.close();
    // }
    res.send();
  });
})



router.get("/createUserColection", () => {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("substituteSystemDB");
    dbo.createCollection("users", function (err, res) {
      if (err) throw err;
      console.log("Collection created!");
      db.close();
    });
  });
})


/* GET home page. */
router.get("/login", function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');
  const { user, password } = req.query;
  //Check the pwd in the server
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("substituteSystemDB");
    var query = { user };
    dbo.collection("users").find(query).toArray(function (err, result) {
      if (err) throw err;
      if (!result || result.length === 0) {
        return res.status(401).send();
      }
      db.close();
      if (result[0].password = password) {
        const token = generateAccessToken(result[0]);
        console.log("token", token);
        return res.json({ token }).send();
      } else {
        return res.status(401).send();
      }
    });
  });

});

router.post("/signup", function (req, res) {
  const { user, password } = req.body;
});
export default router;
