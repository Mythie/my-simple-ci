const express = require('express');
const path = require('path');
const app = express();

const port = process.env.PORT || 8080;

app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.listen((port, function() {
  console.log('Now listening on port 3000');
});