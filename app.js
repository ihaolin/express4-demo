var express = require('express');
var morgan = require('morgan');
var favicon = require('serve-favicon');
var path = require('path');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var hbs = require('hbs');

var app = express();

// path
app.set('path', __dirname);

// port 
app.set('port', process.env.PORT || 8899);

// views
// template suffix
app.set('view engine', 'html');
// run hbs engine
app.engine('html', hbs.__express);
// view path
app.set("views", path.join(__dirname, 'views'));

// public
app.use(express.static(path.join(__dirname, 'public')));

// favicon
app.use(favicon(__dirname + '/public/favicon.ico'));

// log
app.use(morgan('dev'));

// body parser
app.use(bodyParser.json());

// method override
app.use(methodOverride());

// routes
require('./routes')(app);

app.listen(app.get('port'));
