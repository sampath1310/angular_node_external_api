const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
//var request = require('request');
var resToAng;
// Get our API routes
const api = require('./server/routes/api');

const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Set our api routes
app.use('/api', api);

const request = require('request-promise');


// making external api call 
app.get('/test', (req, res) => {

  // req.pipe(request.get("http://codeforgeek.com",function(error,response,body){
  //       if(error){
  //             console.log(error);
  //       }else{
  //             console.log(response);
  //     }
  //   }))

//  var data="";
 
const options = {
  method: 'GET',
  uri: 'https://api.got.show/api/ages/',
 // body: req.body,
 // json: true,
 // headers: {
  //    'Content-Type': 'application/json',
 //     'Authorization': 'bwejjr33333333333'
 // }
};

request(options).then(function (response){
res.status(200).json(response);
})
.catch(function (err) {
console.log(err);
});// .then(data =>{
//   res.send(data);
// });
//res.status(200).json(somereq);
});



// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));