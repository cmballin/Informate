
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');

//New routes are added here
var analytics = require('./routes/analytics');
var login = require('./routes/login');
var signup = require('./routes/signup');
var addpost  = require('./routes/addpost');
var post = require('./routes/post');
var search = require('./routes/search');
var settings = require('./routes/settings');
var userprofile = require('./routes/userprofile');
var password = require('./routes/password');
var aboutus = require('./routes/aboutus');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

//Route starts here
//app.get('/', index.view);
app.get('/', login.view);

//New routes are added here
app.get('/analytics', analytics.view);
//app.get('/login', login.view);
app.get('/signup', signup.view);
app.get('/index', index.view);
app.get('/addpost', addpost.view);
app.post('/addnewpost', addpost.addnewpost);
app.get('/post', post.view);
app.post('/know', post.updateknowvalue);
app.post('/notknow', post.updatenotknowvalue);
app.get('/search', search.view);
app.get('/settings', settings.view);
app.get('/userprofile', userprofile.view);
app.post('/addprofile', signup.addprofile);
app.get('/password', password.view);
app.get('/aboutus', aboutus.view);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
