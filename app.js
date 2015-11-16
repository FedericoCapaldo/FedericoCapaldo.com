var express = require ('express');
var app = express();

// __dirname == global variable where the app.js file is.
app.set('view engine', 'ejs');

app.locals.myNameTitle = "F Capaldo";

//homepage
app.get('/', function(req, res){
  res.render('default', 
    {title: 'Home',
     classname: 'home',
     users: ['Jon', 'Jack', 'Lurido', 'Valerio']
    });
});

app.get('/about', function(req, res){
  res.render('default', 
    {title: 'About me',
     classname: 'about',
    });
});

app.get('/projects', function(req, res){
  res.render('default',
    { title: 'Projects',
      classname: 'projects'
    });
});

app.get('/contact', function(req, res){
  res.render('default', 
    { title: 'Contact me',
      classname: 'contact'
    });
});

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
