const  express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const SourceMapSupport = require('source-map-support');
const routes = require('./src/routes/teapi');

// define our app using express
const app = express();

app.use(cors())

app.use("/api/uploads", express.static(__dirname + '/uploads'));


// configure app
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));
app.use(express.static(path.join(__dirname, 'public')));


// set the port
const port = process.env.PORT || 3001;

// connect to database
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/');
SourceMapSupport.install();
app.get('/', (req,res) => {
  return res.end('Api working');
})

app.use('/teapi', routes);

// catch 404
app.use((req, res, next) => {
  res.status(404).send('<h2 align=center>Page Not Found!</h2>');
});

// start the server
app.listen(port,() => {
  console.log(`App Server Listening at ${port}`);
});
