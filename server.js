const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const morgan = require("morgan");
const app = express();

const passport = require('passport');
const session = require('express-session');
const flash = require('connect-flash');

// Express body parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(express.static("client/public"));
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

//log every request to the console
app.use(morgan("dev"));

// Connect to the Mongo DB
const mongoURL = process.env.MONGODB_URI || "mongodb://localhost/paxiDB"
mongoose.connect(mongoURL, { useNewUrlParser: true })
  .then(() => {
    console.log("🌎 ==> Successfully connected to mongoDB.");
  })
  .catch((err) => {
    console.log(`Error connecting to mongoDB: ${err}`);
  });



// Passport Config
require('./config/passport')(passport);

// Express session
app.use(session({ secret: 'secret', resave: true, saveUninitialized: true }));

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Connect flash
app.use(flash());

// Express Routes
// const routes = require("./routes");
// app.use(routes);

// // Routes
app.use('/', require('./routes/index.js'));
app.use('/api', require('./routes/api.js'));

// Start the API server
const PORT = process.env.PORT || 3001;
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});



/////////////////////////////////////////////////////////////
