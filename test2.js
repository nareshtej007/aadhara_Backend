/*

var randomNumber = function() {
  return Math.floor(Math.random() * 9999 * 7);
};
const firLetter = "U";
// var randomChar = function() {
//   return String.fromCharCode(64 + Math.floor(Math.random() * 26 + 1));
// };
console.log(">>>>>>", firLetter + randomNumber());


db
    .collection("userregisters")
    .find()
    .sort(mysort)
    .toArray();
  console.log("sorted data", sortedData);
};
*/

/*
const db = require("./models/UserRegisterMdl");

sortUsers = () => {
  var sortedData = db.userregisters.find().sort({ firstName: 1 });
  console.log("sorted data", sortedData);
  // var sortedData = db.find({ firstName: { $exists: true } }).sort({
  //   firstName: 1
  // });
};

*/

/*
var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(
  url,
  function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    var mysort = { name: 1 };
    dbo
      .collection("customers")
      .find()
      .sort(mysort)
      .toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
      });
  }
);

*/

/*
// find where status is d
db.inventory.find( { status: "D" } )
// serch the user by name

function (req,res,next) {
  console.log(req.params.qcategory);
  Question.find({
      "category.name": req.params.qcategory,}
   , function (err,data) {
      if (err) {
          err.status = 406;
          return next(err);
      }
      console.log(data);
      return res.status(201).json({
          message: ' success.',data:data
      })
  })
};*/
