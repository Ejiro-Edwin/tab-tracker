const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser');
const morgan = require('morgan');

let app = express();


app.use(morgan("combined"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
    cors({
      origin: "*",
      methods: "GET, HEAD, PUT, PATCH, POST, DELETE, OPTIONS",
      preflightContinue: false,
      optionsSuccessStatus: 204
    })
  );

  app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
  });

  app.get('/', (req, res) => {
    return res.status(200).json({ msg: 'Welcome to new tab-tracker API.'});
  });
  
   app.use(function (err, req, res, next) {
   res.status(500).json('Something broke!');
   })
  
  const port = process.env.PORT || 8081;
  
  const server = app.listen(port, () => console.log(`app Running on ${port}`));
  
  process.on('exit', () => server.close())
  process.on('SIGTERM', () => server.close())
  process.on('uncaughtException', () => server.close())
  
  module.exports = app;


