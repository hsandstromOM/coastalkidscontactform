var https = require('https');
var express = require('express');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');
var smtpTransport = require("nodemailer-smtp-transport")
var app = express();
var ecstatic = require('ecstatic');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var transporter = nodemailer.createTransport('smtps://hosea%40obviouslee.com:hosea@smtp.obviouslee.com');
app.get('/appointment', bodyParser.json(),function(req,res) {
  var mailOptions = {
    from : req.query.email,
    to : 'hosea@obviouslee.com',
    subject : "Coastal Kids Appointment Form",
    text :
    "New or Returning Patient: " +req.query.patientStatus +
    "\n\nFull name: " + req.query.fullName +
    "\n\nPhone number: " + req.query.phone +
    "\n\nEmail: " + req.query.email+
  //  "\n\nChilds age: " + req.query.age+
    "\n\nType of Appointment: " + req.query.apptType+
    "\n\nHow they heard about us: " + req.query.hearAbout+
    "\n\nPreferred location: " + req.query.location +
    "\n\nBest method of contact: " + req.query.contactMethod+
    "\n\nPreferred day: " + req.query.dayPreference +
    "\n\nPreferred time: " + req.query.timePreference +
    "\n\nComment/Question: " + req.query.comments +
    ///child 1////
    "\n\nChild First Name: " + req.query.childName1+
    "\n\nChild Last Name: " + req.query.childLast1+
    "\n\nChild DOB: " + req.query.childDOB1+
    "\n\nInsurance Company: " + req.query.insurComp1 +
    "\n\nSubscriber Name: " + req.query.subscriberName1 +
    "\n\nSubscriber ID: " + req.query.subscriberID1 +
    "\n\nSubscriber DOB: " + req.query.subscriberDOB1 +
    "\n\nEmployer: " + req.query.employer1 +
    "\n\nMedicaid DOB on card: " + req.query.DOBcard1 +
    "\n\nMedicaid ID: " + req.query.medicaidID1 +
    "\n\nSecond Child" +
    "\n\nChild First Name: " + req.query.childName2+
    "\n\nChild Last Name: " + req.query.childLast2+
    "\n\nChild DOB: " + req.query.childDOB2+
    "\n\nInsurance Company: " + req.query.insurComp2 +
    "\n\nSubscriber Name: " + req.query.subscriberName2 +
    "\n\nSubscriber ID: " + req.query.subscriberID2 +
    "\n\nSubscriber DOB: " + req.query.subscriberDOB2 +
    "\n\nEmployer: " + req.query.employer2 +
    "\n\nMedicaid DOB on card: " + req.query.DOBcard2 +
    "\n\nMedicaid ID: " + req.query.medicaidID2 +
    "\n\nThird Child" +
    "\n\nChild First Name: " + req.query.childName3+
    "\n\nChild Last Name: " + req.query.childLast3+
    "\n\nChild DOB: " + req.query.childDOB3+
    "\n\nInsurance Company: " + req.query.insurComp3 +
    "\n\nSubscriber Name: " + req.query.subscriberName3 +
    "\n\nSubscriber ID: " + req.query.subscriberID3 +
    "\n\nSubscriber DOB: " + req.query.subscriberDOB3 +
    "\n\nEmployer: " + req.query.employer3 +
    "\n\nMedicaid DOB on card: " + req.query.DOBcard3 +
    "\n\nMedicaid ID: " + req.query.medicaidID3 +
    "\n\nFourth Child" +
    "\n\nChild First Name: " + req.query.childName4+
    "\n\nChild Last Name: " + req.query.childLast4+
    "\n\nChild DOB: " + req.query.childDOB4+
    "\n\nInsurance Company: " + req.query.insurComp4 +
    "\n\nSubscriber Name: " + req.query.subscriberName4 +
    "\n\nSubscriber ID: " + req.query.subscriberID4 +
    "\n\nSubscriber DOB: " + req.query.subscriberDOB4 +
    "\n\nEmployer: " + req.query.employer4 +
    "\n\nMedicaid DOB on card: " + req.query.DOBcard4 +
    "\n\nMedicaid ID: " + req.query.medicaidID4 +
    "\n\nFifth Child" +
    "\n\nChild First Name: " + req.query.childName5+
    "\n\nChild Last Name: " + req.query.childLast5+
    "\n\nChild DOB: " + req.query.childDOB5+
    "\n\nInsurance Company: " + req.query.insurComp5 +
    "\n\nSubscriber Name: " + req.query.subscriberName5+
    "\n\nSubscriber ID: " + req.query.subscriberID5 +
    "\n\nSubscriber DOB: " + req.query.subscriberDOB5 +
    "\n\nEmployer: " + req.query.employer5 +
    "\n\nMedicaid DOB on card: " + req.query.DOBcard5 +
    "\n\nMedicaid ID: " + req.query.medicaidID5 +
    "\n\nSixth Child" +
    "\n\nChild First Name: " + req.query.childName6+
    "\n\nChild Last Name: " + req.query.childLast6+
    "\n\nChild DOB: " + req.query.childDOB6+
    "\n\nInsurance Company: " + req.query.insurComp6 +
    "\n\nSubscriber Name: " + req.query.subscriberName6 +
    "\n\nSubscriber ID: " + req.query.subscriberID6 +
    "\n\nSubscriber DOB: " + req.query.subscriberDOB6 +
    "\n\nEmployer: " + req.query.employer6 +
    "\n\nMedicaid DOB on card: " + req.query.DOBcard6+
    "\n\nMedicaid ID: " + req.query.medicaidID6 +
    "\n\nSeventh Child" +
    "\n\nChild First Name: " + req.query.childName7+
    "\n\nChild Last Name: " + req.query.childLast7+
    "\n\nChild DOB: " + req.query.childDOB7+
    "\n\nInsurance Company: " + req.query.insurComp7 +
    "\n\nSubscriber Name: " + req.query.subscriberName7 +
    "\n\nSubscriber ID: " + req.query.subscriberID7 +
    "\n\nSubscriber DOB: " + req.query.subscriberDOB7 +
    "\n\nEmployer: " + req.query.employer7 +
    "\n\nMedicaid DOB on card: " + req.query.DOBcard7 +
    "\n\nMedicaid ID: " + req.query.medicaidID7 +
    "\n\nEight Child" +
    "\n\nChild First Name: " + req.query.childName8+
    "\n\nChild Last Name: " + req.query.childLast8+
    "\n\nChild DOB: " + req.query.childDOB8+
    "\n\nInsurance Company: " + req.query.insurComp8 +
    "\n\nSubscriber Name: " + req.query.subscriberName8 +
    "\n\nSubscriber ID: " + req.query.subscriberID8 +
    "\n\nSubscriber DOB: " + req.query.subscriberDOB8 +
    "\n\nEmployer: " + req.query.employer8 +
    "\n\nMedicaid DOB on card: " + req.query.DOBcard8 +
    "\n\nMedicaid ID: " + req.query.medicaidID8 +
    "\n\nNinth Child" +
    "\n\nChild First Name: " + req.query.childName9+
    "\n\nChild Last Name: " + req.query.childLast9+
    "\n\nChild DOB: " + req.query.childDOB9+
    "\n\nInsurance Company: " + req.query.insurComp9 +
    "\n\nSubscriber Name: " + req.query.subscriberName9 +
    "\n\nSubscriber ID: " + req.query.subscriberID9 +
    "\n\nSubscriber DOB: " + req.query.subscriberDOB9 +
    "\n\nEmployer: " + req.query.employer9 +
    "\n\nMedicaid DOB on card: " + req.query.DOBcard9 +
    "\n\nMedicaid ID: " + req.query.medicaidID9 +
    "\n\nTenth Child" +
    "\n\nChild First Name: " + req.query.childName10+
    "\n\nChild Last Name: " + req.query.childLast10+
    "\n\nChild DOB: " + req.query.childDOB10+
    "\n\nInsurance Company: " + req.query.insurComp10 +
    "\n\nSubscriber Name: " + req.query.subscriberName10 +
    "\n\nSubscriber ID: " + req.query.subscriberID10 +
    "\n\nSubscriber DOB: " + req.query.subscriberDOB10 +
    "\n\nEmployer: " + req.query.employer10 +
    "\n\nMedicaid DOB on card: " + req.query.DOBcard10 +
    "\n\nMedicaid ID: " + req.query.medicaidID10
  }
  console.log(mailOptions);
  transporter.sendMail(mailOptions, function(error, response){
    if(error){
      console.log(error);
      res.end("error");
    } else {
      console.log(response.response.toString());
      console.log("Message sent");
      res.end("sent");
    }
  });
});

var SECRET = "6LdYSCcTAAAAALvokCax2wi_2Om1kxRCyq6aaEWT";

//var SECRET = "6LfpQgoUAAAAAJmf95Vablv_m2qQ9GngYcAZvkxa";

app.post('/captcha', bodyParser.json(),function(req,res){
  console.log("you getting this?");
  console.log(req.body.recaptcha);
  verifyRecaptcha(req.body.recaptcha, function(success) {
    if (success) {
     res.end(JSON.stringify({ registeredSuccessfully: true }));
     console.log("it worked yo");
     // TODO: do registration using params in req.body
    } else {
     res.end(JSON.stringify({ registeredSuccessfully: false, reason: "Captcha failed, try again." }));
     // TODO: take them back to the previous page
     // and for the love of everyone, restore their inputs
    }
  });
});

function verifyRecaptcha(key, callback) {
  https.get("https://www.google.com/recaptcha/api/siteverify?secret=" + SECRET + "&response=" + key, function(res) {
    var data = "";
    res.on('data', function (chunk) {
      data += chunk.toString();
    });
    res.on('end', function() {
      try {
        var parsedData = JSON.parse(data);
        console.log(parsedData);
        callback(parsedData.success);
      } catch (e) {
        callback(false);
      }
    });
  });
}

app.get('/confirm', bodyParser.json(),function(req,res){
  var mailOptions = {
    from : 'dentalcoastalkids@gmail.com',
    to : req.query.email,
    subject : "Thank you from Coastal Kids Dental & Braces!",
    text : "Thank you for submitting an appointment request to Coastal Kids Dental & Braces! If you notice any errors in your information below, please email us at websitecontact@coastalkidsdental.com. Our scheduling team is checking for openings that fit your schedule and will contact you within one business day by our preferred contact method." +
    "\n\nWe look forward to meeting you or seeing you and your family again!" +
    "\n\nNew or Returning Patient: " +req.query.patientStatus +
    "\n\nFull name: " + req.query.fullName +
    "\n\nPhone number: " + req.query.phone +
    "\n\nEmail: " + req.query.email+
    // "\n\nChilds age: " + req.query.age+
    "\n\nType of Appointment: " + req.query.apptType+
    "\n\nHow you heard about us: " + req.query.hearAbout+
    "\n\nPreferred location: " + req.query.location +
    "\n\nBest method of contact: " + req.query.contactMethod+
    "\n\nPreferred day: " + req.query.dayPreference +
    "\n\nPreferred time: " + req.query.timePreference + "\n\nComment/Question: " + req.query.comments
  }
  console.log(mailOptions);
  transporter.sendMail(mailOptions, function(error, response) {
    if(error){
      console.log(error);
      res.end("error");
    } else{
      console.log(response.response.toString());
      console.log("Message sent");
      res.end("sent");
    }
  });
});

app.get('/ins', bodyParser.json(),function(req,res) {
  var mailOptions = {
    from : req.query.insEmail,
    to : 'dentalcoastalkids@gmail.com',
    subject : "Coastal Kids Insurance Form",
    text : "Full name: " + req.query.insFullName +
    "\n\nPhone: " + req.query.insPhone +
    "\n\nEmail: " + req.query.insEmail +
    "\n\nChild First Name " + req.query.insChildName0 +
    "\n\nChild Last Name: " + req.query.insChildLast0 +
    "\n\nChild DOB: " + req.query.insChildDOB0 +
    "\n\nSubscriber Name: " + req.query.insSubscriberName0 +
    "\n\nSubscriber ID: " + req.query.insSubscriberID0 +
    "\n\nSubscriber DOB: " + req.query.insSubscriberDOB0 +
    "\n\nEmployer: " + req.query.insEmployer0 +
    "\n\nDOB on card: " + req.query.insDOBcard0 +
    "\n\nMedicaid ID: " + req.query.insMedicaidID0 +
    "\n\nSecond Child " +
    "\n\nChild First Name " + req.query.insChildName1 +
    "\n\nChild Last Name: " + req.query.insChildLast1 +
    "\n\nChild DOB: " + req.query.insChildDOB1 +
    "\n\nSubscriber Name: " + req.query.insSubscriberName1 +
    "\n\nSubscriber ID: " + req.query.insSubscriberID1 +
    "\n\nSubscriber DOB: " + req.query.insSubscriberDOB1 +
    "\n\nEmployer: " + req.query.insEmployer1 +
    "\n\nDOB on card: " + req.query.insDOBcard1 +
    "\n\nMedicaid ID: " + req.query.insMedicaidID1 +
    "\n\nThird Child " +
    "\n\nChild First Name " + req.query.insChildName2 +
    "\n\nChild Last Name: " + req.query.insChildLast2 +
    "\n\nChild DOB: " + req.query.insChildDOB2 +
    "\n\nSubscriber Name: " + req.query.insSubscriberName2 +
    "\n\nSubscriber ID: " + req.query.insSubscriberID2 +
    "\n\nSubscriber DOB: " + req.query.insSubscriberDOB2 +
    "\n\nEmployer: " + req.query.insEmployer2 +
    "\n\nDOB on card: " + req.query.insDOBcard2 +
    "\n\nMedicaid ID: " + req.query.insMedicaidID2 +
    "\n\nFourth Child " +
    "\n\nChild First Name " + req.query.insChildName3 +
    "\n\nChild Last Name: " + req.query.insChildLast3 +
    "\n\nChild DOB: " + req.query.insChildDOB3 +
    "\n\nSubscriber Name: " + req.query.insSubscriberName3 +
    "\n\nSubscriber ID: " + req.query.insSubscriberID3 +
    "\n\nSubscriber DOB: " + req.query.insSubscriberDOB3 +
    "\n\nEmployer: " + req.query.insEmployer3 +
    "\n\nDOB on card: " + req.query.insDOBcard3 +
    "\n\nMedicaid ID: " + req.query.insMedicaidID3 +
    "\n\nFifth Child " +
    "\n\nChild First Name " + req.query.insChildName4 +
    "\n\nChild Last Name: " + req.query.insChildLas4 +
    "\n\nChild DOB: " + req.query.insChildDOB4 +
    "\n\nSubscriber Name: " + req.query.insSubscriberName4 +
    "\n\nSubscriber ID: " + req.query.insSubscriberID4 +
    "\n\nSubscriber DOB: " + req.query.insSubscriberDOB4 +
    "\n\nEmployer: " + req.query.insEmployer4 +
    "\n\nDOB on card: " + req.query.insDOBcard4 +
    "\n\nMedicaid ID: " + req.query.insMedicaidID4 +
    "\n\nSixth Child " +
    "\n\nChild First Name " + req.query.insChildName5 +
    "\n\nChild Last Name: " + req.query.insChildLast5 +
    "\n\nChild DOB: " + req.query.insChildDOB5 +
    "\n\nSubscriber Name: " + req.query.insSubscriberName5 +
    "\n\nSubscriber ID: " + req.query.insSubscriberID5 +
    "\n\nSubscriber DOB: " + req.query.insSubscriberDOB5 +
    "\n\nEmployer: " + req.query.insEmployer5 +
    "\n\nDOB on card: " + req.query.insDOBcard5 +
    "\n\nMedicaid ID: " + req.query.insMedicaidID5 +
    "\n\nSeventh Child " +
    "\n\nChild First Name " + req.query.insChildName6 +
    "\n\nChild Last Name: " + req.query.insChildLast6 +
    "\n\nChild DOB: " + req.query.insChildDOB6 +
    "\n\nSubscriber Name: " + req.query.insSubscriberName6 +
    "\n\nSubscriber ID: " + req.query.insSubscriberID6 +
    "\n\nSubscriber DOB: " + req.query.insSubscriberDOB6 +
    "\n\nEmployer: " + req.query.insEmployer6 +
    "\n\nDOB on card: " + req.query.insDOBcard6 +
    "\n\nMedicaid ID: " + req.query.insMedicaidID6 +
    "\n\nEighth Child " +
    "\n\nChild First Name " + req.query.insChildName7 +
    "\n\nChild Last Name: " + req.query.insChildLast7 +
    "\n\nChild DOB: " + req.query.insChildDOB7 +
    "\n\nSubscriber Name: " + req.query.insSubscriberName7 +
    "\n\nSubscriber ID: " + req.query.insSubscriberID7 +
    "\n\nSubscriber DOB: " + req.query.insSubscriberDOB7 +
    "\n\nEmployer: " + req.query.insEmployer7 +
    "\n\nDOB on card: " + req.query.insDOBcard7 +
    "\n\nMedicaid ID: " + req.query.insMedicaidID7 +
    "\n\nNinth Child " +
    "\n\nChild First Name " + req.query.insChildName8 +
    "\n\nChild Last Name: " + req.query.insChildLast8 +
    "\n\nChild DOB: " + req.query.insChildDOB8 +
    "\n\nSubscriber Name: " + req.query.insSubscriberName8 +
    "\n\nSubscriber ID: " + req.query.insSubscriberID8 +
    "\n\nSubscriber DOB: " + req.query.insSubscriberDOB8 +
    "\n\nEmployer: " + req.query.insEmployer8 +
    "\n\nDOB on card: " + req.query.insDOBcard8 +
    "\n\nMedicaid ID: " + req.query.insMedicaidID8 +
    "\n\nTenth Child " +
    "\n\nChild First Name " + req.query.insChildName9 +
    "\n\nChild Last Name: " + req.query.insChildLast9 +
    "\n\nChild DOB: " + req.query.insChildDOB9 +
    "\n\nSubscriber Name: " + req.query.insSubscriberName9 +
    "\n\nSubscriber ID: " + req.query.insSubscriberID9 +
    "\n\nSubscriber DOB: " + req.query.insSubscriberDOB9 +
    "\n\nEmployer: " + req.query.insEmployer9 +
    "\n\nDOB on card: " + req.query.insDOBcard9 +
    "\n\nMedicaid ID: " + req.query.insMedicaidID9 +
    "\n\nComments: " + req.query.comments
  }
  transporter.sendMail(mailOptions, function(error, response) {
    if(error) {
      console.log(error);
      res.end("error");
    } else {
      console.log(response.response.toString());
      console.log("Message sent");
      res.end("sent");
    }
  });
});

app.get('/', function(req,res){
  res.sendfile('www/newForm.html');
});

app.get('/insurance', function(req,res){
  res.sendfile('www/patientIns.html');
});

app.get('*', ecstatic('www'));

app.use("*",function(req,res) {
  res.status(404).send("404");
})

app.listen(process.env.PORT || 3000, function(){
  console.log("Express Started on Port 3000");
});
