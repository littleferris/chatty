const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

var messages = [];


const app = express();

var port = 8989;


app.use(bodyParser.json());
app.use(cors())


app.options('/', cors());
app.post('/', cors(), (req, res, next) => {
  console.log(req.body);
  messages.push({
    message: req.body.message,
    time: new Date()
  })
  res.status(200).send(JSON.stringify(messages));
});

app.get('/', cors(), (req, res, next) => {
  res.status(200);
});

app.listen(port, () => {
  console.log('I am listening on port ' + port);
});


// app.get('/', function(req, res) {
//   res.send(json.stringify(messages));
// });

// app.options('/', (req, res, next) => {
//     res.status(200).set({
//     'Access-Control-Allow-Origin': '*',
//     'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
//     'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
//   }).send();
// })

// app.post('/', (req, res) => {
//   console.log(req.body);
//   messages.push({
//     message: req.body.message,
//     time: new Date()
//   });
//
//   res.status(200).set({
//     'Content-Type': 'application/json',
//     'Access-Control-Allow-Origin': '*',
//     'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
//     'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
//     'X-XSS-Protection': '1; mode=block',
//     'X-Frame-Options': 'SAMEORIGIN',
//     'Content-Security-Policy': "default-src 'self' devmountain.github.io"
//   }).send(JSON.stringify(messages));
// });


// app.get('/', function( req, res ) {
//   res.status(200).set({
//     'Content-Type': 'application/json',
//     'Access-Control-Allow-Origin': '*',
//     'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
//     'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
//     'X-XSS-Protection': '1; mode=block',
//     'X-Frame-Options': 'SAMEORIGIN',
//     'Content-Security-Policy': "default-src 'self' devmountain.github.io"
//   }).send(JSON.stringify(messages));
// });
