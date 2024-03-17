const express = require('express');

// Create the first Express app
const app1 = express();

app1.get('/api1', (req, res) => {
  res.send('This is the response from the first Express server');
});

app1.listen(3000, () => {
  console.log('First Express server listening on port 3000');
});

// Create the second Express app
const app2 = express();

app2.get('/api2', (req, res) => {
  res.send('This is the response from the second Express server');
});

app2.listen(4000, () => {
  console.log('Second Express server listening on port 4000');
});
