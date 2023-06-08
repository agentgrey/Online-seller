/** ------------------ IMPORTING PACKAGE ------------------ **/
const express = require('express');
const port = 8000;
const app = express();

const expressLayouts = require('express-ejs-layouts');
const db = require("./config/mongoose");
const bodyParser = require('body-parser');

const session = require("express-session");
const passport = require('passport');
const passportLocal = require('./config/passport_local');



// middleware for body-parser
app.use(bodyParser.json());
app.use(express.urlencoded({extended: true}));

// setting layouts
app.use(expressLayouts);

// setting up view engine
app.set('view engine', 'ejs');
app.set('views' , './views');

//accesing static files from assets folder
app.use(express.static('./assets'));  

//store the session cookie
app.use(session({
    name: 'onlineSeller',
    // TODO change the secret before deployment in production mode
    secret: "1234567",
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000 * 60 * 1000)
    }
}));

// Using passport
app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);

// setting up routes
app.use('/', require('./routes'));

// directing the app in the given port
app.listen(port, function(err) {
    if(err) {
        console.log('Error', err);
        return;
    }
    console.log('Server is up and running on port: ', port);

});