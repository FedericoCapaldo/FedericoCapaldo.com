var express = require ('express');
var app = express();
var routes = require('./routes');

// __dirname == global variable where the app.js file is.
app.set('view engine', 'ejs');

app.locals.myNameTitle = "F Capaldo";

app.get('/', routes.home);
app.get('/about', routes.about);
app.get('/projects', routes.projects);
app.get('/contact', routes.contact);


/* app.get('/who/:name?', function(req, res){
  var username = req.params.name;
  res.render('userPage', {name: username});
});

app.get('/who/:name?/:title', function(req, res){
  var name = req.params.name;
  var title = req.params.title;
  res.send('<p>name: ' + name + '<br> title: ' + title + '<p>');
});

app.get('*', function(req, res){
  res.send('Bad Route');
}); */


var server = app.listen(3000, function(){
  console.log("Listening on port 3000");
});
