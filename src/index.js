require('dotenv').config();
const chalk = require('chalk');
const compression = require('compression');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// api routes
const listingRoutes = require('./routes/listing');

const app = express();

// connect to db
if (!process.env.DB_URL) {
  console.log(
    chalk.red(
      'DB_URL not configured. Please update your .env file using sample.env as an example'
    )
  );
  process.exit();
}
mongoose.connect(process.env.DB_URL, { useNewUrlParser: true });

// set up app
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());
app.use(compression());
app.disable('x-powered-by');

// routes
app.use('/api/listing', listingRoutes);
app.get('/api', (req, res) => res.send('API is running!'));
app.get('/', (req, res) => res.send('Nothing here. Try going to /api'));

if (!process.env.PORT) {
  console.log(
    chalk.red(
      'PORT not configured. Please update your .env file using sample.env as an example'
    )
  );
  process.exit();
}

app.listen(process.env.PORT, () => {
  console.log(chalk.green(`Listening @ http://localhost:${process.env.PORT}/`));
});
