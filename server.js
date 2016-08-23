var config = require('./webpack.config');
var webpack = require('webpack');
var bodyParser = require('body-parser');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var getIpAddr = require('./app/modules/helpers/getIpAddr');

var app = new (require('express'))();
var port = 3000;
var host = getIpAddr();

var compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
}));
app.use(webpackHotMiddleware(compiler));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, host, function(error) {
  if (error) {
    console.error(error);
  } else {
    console.info(`==> 🌎  Open up http://${host}:${port}/ `);
  }
})
