 "use strict";

var registerUser = require("./functions/RegisterUserFcn");
var removeUser = require("./functions/RemoveUserFcn");
var updateUser = require("./functions/UpdateUserFcn");
var viewUser = require("./functions/GetAllUserFcn");
var sortUser = require("./functions/SortUserFcn");
var filterUser = require("./functions/filterUserFcn");
var cors = require("cors");
var path = require("path");

var randomNumber = function() {
  return Math.floor(Math.random() * 9999 * 7);
};
const firLetter = "U";
const userStatus = "Active";


module.exports = router => {
  router.get("/", (req, res) => res.send("Welcome to adharaa !"));

  router.post("/registerUser", cors(), (req, res) => {
    const customer_id = firLetter + randomNumber();
    console.log("Register>>>>>>>>>>>", customer_id); 
    const name = req.body.name;
    console.log(">>>>>>>>>>>>>>", name);
    const country = req.body.country;
    console.log(">>>>>>>>>>>>>>", country);
    const mobile = req.body.mobile;
    console.log(">>>>>>>>>>>>>", mobile);
    const email = req.body.email;
    console.log(">>>>>>>>>>>>>", email);
    const status = userStatus;
    console.log("Now user is -----", status);


    registerUser
      .register(customer_id, name,country, mobile, email, status)
      .then(result => {
        res.send({
          result: result,
          message: "user has been registered successfully",
          status: true
        });
      });
  });

  //====================== View number of users =============

  router.get("/viewUser", cors(), (req, res) => {
    viewUser.getDetail().then(result => {
      res.send({
        result: result,
        message: "users details displayed successfully",
        status: true
      });
    });
  });
  //====================== Remove Users =====================
  router.post("/removeUser", cors(), (req, res) => {
    const id = req.body._id;
    console.log("mongo id $$$$$$$$$$$", id);
    removeUser.removeUser(id).then(result => {
      res.send({
        result: result.customer_id,
        message: "user has been removed successfully",
        status: true
      });
    });
  });

  //======================== Update user ====================

  router.post("/updateUser", cors(), (req, res) => {
    const name = req.body.name;
    console.log(">>>>>>>>>>>>>>", name);
    const country = req.body.country;
    console.log(">>>>>>>>>>>>>>", country);
    const mobile = req.body.mobile;
    console.log(">>>>>>>>>>>>>", mobile);
    const email = req.body.email;
    console.log(">>>>>>>>>>>>>", email);
    const status = userStatus;
    console.log("Now user is -----", status);

    updateUser
      .updateDetail(name,country, mobile, email, status)
      .then(result => {
        res.send({
          message: "user has been updated successfully",
          status: true
        });
      });
  });

  //========================= To sort details of User ==================

  router.get("/sortName", cors(), (req, res) => {
    sortUser.sortUsers().then(result => {
      res.send({
        result: result,
        message: "sorted details",
        status: true
      });
    });
  });

  //========================= Filter user in different criteria ========

  router.post("/filterUser", cors(), (req, res) => {
  
    const name = req.body.name;
    const country = req.body.country;
    const mobile = req.body.mobile;
    const email = req.body.email;
    console.log("details $$$$$$$$$$$$$$$$$$$$$$$$$$$$", name, country, mobile, email);

    filterUser.filterUsers(name, country, mobile, email).then(result => {
      res.send({
        result: result.name,
        message: "Filtered details",
        status: true
      });
    });
  });
  //=======================
};
