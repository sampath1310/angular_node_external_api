const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
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



// // making external api call 
// app.get('/test', (req, res) => {
//  var data='';
// const options = {
//   method: 'GET',
//   uri: 'https://dog.ceo/api/breeds/list',
//  };
// //  http.get(options,resp=>{
// //    data+=resp;
// // });
// http.get('https://dog.ceo/api/breeds/list',resp=>{
//   console.log(resp);
// });
//  res.status(200).json('data');

// });
app.get('/test', (req, resp)=>{
  var body='';
  http.get('http://dog.ceo/api/breeds/list', function(res) {
    var body = '';
    res.on('data', function(chunk) {
      body += chunk;
    });
    res.on('end', function() {
      resp.json(body);
    });
  }).on('error', function(e) {
    console.log("Got error: " + e.message);
  }); 
});

app.get('/scrape', function(req, res){

  url = 'https://www.trendhunter.com/trends/linksys-wrt32xb';

  request(url, function(error, response, html){
      if(!error){
          var $ = cheerio.load(html);
          console.log(html);
      var title, release, rating;
      var json = { title : ""};
  
      $('.articleText').filter(function(){
          var data = $(this);
          title = data.text();            
  
          json.title = title;
      })
  
      
  }
  
    res.send(json);
  
      }) ;
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