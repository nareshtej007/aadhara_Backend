const express = require('express');
var nodemailer = require('nodemailer');
const index1 = require('../mongoSchemas/saloonRequestRegistrationSchema');
var bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.json({ type: 'application/*+json' }))
app.use(express.json());



var transporter = nodemailer.createTransport({
  service: 'outlook',
  auth: {
    user: 'sachin.kalamkar@rapidqube.com',
    pass: 'svarrggk1@home'
  }
});


app.post('/request', async(req, res) => {
    //req.body
    console.log("data saved ",req.body);
    const obj=new index1(req.body);
    const objsave =  await obj.save()
    .then((objsave) => 
        transporter.sendMail({
            from: 'sachin.kalamkar@rapidqube.com',
            to: 'sachin.kalamkar@rapidqube.com',
            subject: 'Registration request',
            text: 'Hello Administrator,\n\nThis is request from "'+ objsave.name_of_salon + '" for registration.\n\nThanks and regards,\n'+objsave.name_of_salon+'.'
        }, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          })
    )
})

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listning on port ${port}....`));
