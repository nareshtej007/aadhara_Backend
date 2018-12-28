"user strict";

var db = require("../models/UserRegisterMdl");

exports.usedServicesCount = (id) => { 

  console.log("user id from &&&&&&&&&&&&******", id);

  return new Promise(async (resolve, reject) => {
    const userObj = await db.find({
      "_id" : id
    })
console.log("user id from mongo???????????????", userObj);
if(userObj[0] != 0){
//console.log("user id from mongo 12", userObj._id);
console.log("show show show", userObj);  

let userCount = userObj['services']          //userObj.services 
// nested for loops
// let countObject = userObj.length;
// for (let i=0; i<countObject; i++) {
//     let items = userObj[i].length;
//     console.log("LLLLLLLLLL", items);
//     for ( let n=0; n<items; n++) {

//         console.log("NNNNNNNNNN", userObj[i][n])

//     }
// }


return resolve(userObj);
}
else {
  console.log("No user exists")
}
  
}).catch(errorMessage => {
    console.log("Hey you got error>>>>>>", errorMessage);
  });
};



    
