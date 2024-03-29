// app.js
const express = require('express');

const app = express();
const SERVER_PORT = process.env.PORT || 3000;
const NAME = process.env.NAME || "Ashita"


// Serve an HTML homepage
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/product', (req, res) => {
    res.sendFile(__dirname + '/views/product.html');
  });

app.listen(SERVER_PORT, () => {
    console.log(`Server listening on port ${SERVER_PORT}`);
    console.log(`NAME : ${NAME}`);
});