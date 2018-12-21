const mongoose = require('mongoose');
var nodemailer = require('nodemailer');


mongoose.connect('mongodb://sachinkalamkar:sachin4193@ds217970.mlab.com:17970/adhaara')
    .then(() => console.log('Connected to MongoDB..'))
    .catch(err => console.log('Oops something went wrong', err));

   
  const saloonSchema = new mongoose.Schema({
    name_of_salon : String,
    type_of_salon : String,
    first_name_salon_owner : String,
    last_name_salon_owner : String, 
    salon_owner_phone : Number,
    address_of_owner : String,
    address_of_salon : String,
    country_of_salon : String,
    emirates_id_of_owner : String,
    email_of_owner : String,
    email_of_saloon : String,
    pin_of_owner : Number,
    pin_of_salon : Number,
    gender_of_owner : String,
    image_of_salon : String,
    request_date : { type:Date, default:Date.now },
    status_of_registration : { type:Boolean, default:false },
  });

module.exports = mongoose.model('Salonschema', saloonSchema);