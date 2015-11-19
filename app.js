var express = require ('express');
var app = express();
var routes = require('./routes');

// __dirname == global variable where the app.js file is.
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.locals.myNameTitle = "F Capaldo";

app.get('/', function(req, res){
  res.render('default', 
             {title: 'Home'});
});


// app.get('/', routes.home);
app.get('/about', routes.about);
app.get('/projects', routes.projects);
app.get('/contact', routes.contact);



var server = app.listen(3000, function(){
  console.log("Listening on port 3000");
});
