const express = require('express');
const bodyParser = require('body-parser');
const allRoutes = require('./routes');
const cors = require('cors');
const { config } = require('dotenv');

// loads environment vars from .env
config();

// start the app and listen for requests on a port
// set to port to 3001 because OS Monterey uses 5000 for the airPlay control center.
const app = express();
const port = process.env.PORT || 3001;


// we use cors library to prevent annoying cors issues
app.use(cors());

// this allows us to get req.body in json format - very important for post requests!
app.use(bodyParser.json());

// lets load all our routes and start making requests!
app.use(allRoutes);

if (process.env.NODE_ENV !== 'test') {
    app.listen(port, () => console.log(`Running on port ${port}`));
}

module.exports = { app };
