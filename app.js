const Car = require('./models/Car');
const Rentalinfo = require('./models/rentalinfo');
const User = require('./models/User');
const mongoose = require ('mongoose');
const express = require('express');
const bodyParse = require('body-parser');
const controllers = require('./controllers');
const auth = require('./config/auth');
const app = require('express')();
require('./config/express')(app);
require('./config/routes')(app);
require('./config/passport')();
require('dotenv/config');


const url = process.env.URL;
mongoose.connect(url, { useMongoClient: true })
const db = mongoose.connection
db.once('open', _ => {
  console.log('Database connected:', url)
})

db.on('error', err => {
  console.error('connection error:', err)
})
app.use(bodyParse.json());

app.get('/',(req,res)=>{
  res.send('RENTOUBER');
});


app.listen(process.env.PORT);


