/* eslint-disable */
const express = require('express');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const mongoose = require('mongoose');

const bodyParser = require('body-parser');
// var getIpAddr = require('./app/modules/helpers/getIpAddr');

// Require Routes
const rootRoute = require('./app/routes/rootRoute');
const registerRoute = require('./app/routes/registerRoute');

const app = new (require('express'))();
const port = 3000;
const host = 'localhost';//getIpAddr();

// ======== WEBPACK ============================================================
const config = require('./webpack.config')[0];
const configExt = require('./webpack.config')[1];

const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const webpackDevMiddConfig = { noInfo:true,publicPath: config.output.publicPath}
const compiler = webpack(config);
const compilerExt = webpack(configExt);

compilerExt.watch(
  {aggregateTimeout: 300, poll: true,},
  (err, stats) => console.log(`Extension built ${(err) ? err : stats.hash}`)
);

app.use(webpackDevMiddleware(compiler, webpackDevMiddConfig));
app.use(webpackHotMiddleware(compiler));
// #############################################################################

// Session
mongoose.connect('mongodb://localhost/test');
app.use(session({
  secret: 'hellomyfuckingworld!',
  store: new MongoStore({mongooseConnection: mongoose.connection})
}));

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
