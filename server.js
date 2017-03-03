var https = require('https');
var express = require('express');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');
var smtpTransport = require("nodemailer-smtp-transport")
var app = express();
var ecstatic = require('ecstatic');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

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
