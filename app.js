const express = require('express');
const path = require('path');
const app = express();

app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.listen(3000, function() {
  console.log('Now listening on port 3000');
});