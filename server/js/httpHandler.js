const fs = require('fs');
const path = require('path');
const headers = require('./cors');
const multipart = require('./multipartUtils');
const messageQueue = require('./messageQueue.js');

function randomNum(min, max) {
  min = Math.ceil(min);
  max = Math.max(max);
  return Math.floor(Math.random() * (max-min)) + min;
}

// Path for the background image ///////////////////////
module.exports.backgroundImageFile = path.join('.', 'background.jpg');
////////////////////////////////////////////////////////

// let messageQueue = null;
module.exports.initialize = (queue) => {
  // messageQueue = queue;
};

module.exports.router = (req, res, next = ()=>{}) => {
  console.log('Serving request type ' + req.method + ' for url ' + req.url);
  if (req.method === 'GET' && req.url === '/') {
    res.writeHead(200, headers);
    res.end(messageQueue.dequeue());
    next();
  };

// if (req.method === 'GET' && req.url = 'http://localhost:3000/background.jpg'){
//   res.writeHead(200, headers);

//   res.end();
//   next();
// }


  //next(); // invoke next() at the end of a request to help with testing!
};