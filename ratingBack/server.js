const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const cors = require('cors');
const passport = require('passport');
const helmet = require('helmet');
const compression = require('compression');

const app = express();

mongoose.Promise = global.Promise; //inicijalizacija
mongoose.connect(process.env.MONGODB) //povezivanje baze sa lokalnim hostom

app.use(helmet());
app.use(compression());

require('./passport/passport-local');

app.use(cors());

app.use((req,res,next) =>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Methods", 'GET', 'POST', 'DELETE', 'PUT');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept ");
    next();
})

app.use(express.static('public')); // unost statickih fajlova kao sto je css ili ikonica
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({
        mongoUrl: mongoose.connection._connectionString,
        mongoOptions: {}
      })
}));

app.use(passport.initialize());
app.use(passport.session());

const user = require('./routes/userRoute');
const gym = require('./routes/gymRoute');
const file = require('./routes/fileRoute');

app.use('/api', user); // http://localhost:3000/api/registration http://localhost:3000/api/registration
app.use('/api', gym);
app.use('/api', file);


app.listen(3000, () =>{
    console.log('Server running on port 3000');
});
