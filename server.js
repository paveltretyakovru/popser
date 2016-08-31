/* eslint-disable */
const express = require('express');
const config = require('./webpack.config')[0];
const configExt = require('./webpack.config')[1];
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const mongoose = require('mongoose');

const webpack = require('webpack');
const bodyParser = require('body-parser');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
// var getIpAddr = require('./app/modules/helpers/getIpAddr');

// Require Routes
const rootRoute = require('./app/routes/rootRoute');
const registerRoute = require('./app/routes/registerRoute');
const webpackDevMiddConfig = {
  noInfo: true,
  publicPath: config.output.publicPath,
}

const app = new (require('express'))();
const port = 3000;
const host = 'localhost';//getIpAddr();
const compiler = webpack(config);
const compilerExt = webpack(configExt);

compilerExt.watch({
    aggregateTimeout: 300,
    poll: true,
}, function(err, stats) {
    if(err) {
      console.log('Extension built with errors:', err);
    } else {
      console.log('Extension built', stats.hash);
    }
});

// Session
mongoose.connect('mongodb://localhost/test');
app.use(session({
  secret: 'hellomyfuckingworld!',
  store: new MongoStore({mongooseConnection: mongoose.connection})
}));

app.use(webpackDevMiddleware(compiler, webpackDevMiddConfig));
app.use(webpackHotMiddleware(compiler));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Routes
app.use('/', rootRoute);
app.use('/register', registerRoute);

app.listen(port, host, function(error) {
  if (error) {
    console.error(error);
  } else {
    console.info(`==> 🌎  Open up http://${host}:${port}/ `);
  }
})
