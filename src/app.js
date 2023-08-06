if (process.env.NODE_ENV == 'development') {
  require('dotenv').config()
}

const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const path = require('path');
const history = require('connect-history-api-fallback');

// const router = require('./routes/index')
const app = express()

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(morgan('dev'))
const staticFileMiddleware = express.static('VUE_SRC/dist');
app.use(staticFileMiddleware);
app.use(history({
  disableDotRule: true,
  verbose: true
}));
app.use(staticFileMiddleware);





app.get('/', (req, res) => {
  res.sendFile('VUE_SRC/build/index.html');
});


module.exports = app
