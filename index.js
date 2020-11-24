const express = require('express');
const morgan = require('morgan');
const connectDB = require('./config/db');


// Connect to database
connectDB();
//
const users = require('./route/user');

const contact = require('./route/contactus');

const app = express();

// Body parser
app.use(express.json());

app.use(morgan('dev'));



app.use('/users', users);
app.use('/contact', contact);



const PORT =  5000;

const server = app.listen(
  PORT,
  console.log(
    `Server running in  mode on port ${PORT}`
  )
);