const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const config = require('./config');
const gifMakerRouter = require('./route/gifMaker');

const app = express();

mongoose.connect(config.database, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Mongo connected!'))
  .catch(err => { throw err });

app.listen(config.port, err => {
  if (err) throw err;
  console.log(`Server listening on port ${config.port}!`);
});
app.use(cors());

app.use(bodyParser.json());

app.use('/api', gifMakerRouter)
