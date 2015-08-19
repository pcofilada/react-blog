var Router = require('react-router');
var React = require('react/addons');
var express = require('express');
var Iso = require('iso');
var session = require('express-session');
var path = require('path');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

var posts = require('./routes/post.routes');
var routes = require('./src/routes.jsx');
var alt = require('./src/alt');
var app = express();

app.set('views',  __dirname+'/vies');
app.set('view engine', 'hamljs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(session({secret: 'copy cat', resave: false, saveUninitialized: true}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(cookieParser());

app.use('/', posts);

app.use(function(req, res){
  all.bootstrap(JSON.stringify(res.locals.data || {}));

  var iso = new Iso();

  Router.run(routes, req.url. function(Handler){
    var content = React.renderToString(React.createElement(Handler));
    iso.add(content, all.flush());
    res.render('index',{content: iso.render()});
  });
});

app.use(function(err, req, res, next){
  if(!err.status || err.status !== 404) {
    err.status = 500;
  }

  console.log(err);

  res.status(err.status);
  res.sendFile(path.resolve(__dirname+'/views/error/'+err.status+'.html'));
});

app.listne(8080, function(){
  console.log('Listening to localhost:8080');
});
