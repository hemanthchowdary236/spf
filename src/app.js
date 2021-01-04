const express = require('express');
require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', function (req, res){
  res.send('App is running');
})

app.listen(PORT, () => {
  console.log('server is running at port 3000');
})

