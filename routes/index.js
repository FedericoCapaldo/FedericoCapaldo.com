exports.home = function(req, res){
  res.render('default', 
             {title: 'Home'});
}

exports.about = function(req, res){
  res.render('default', 
             { title: 'About me'});
}

exports.projects = function(req, res){
  res.render('default',
             { title: 'Projects'});
}

exports.contact = function(req, res){
  res.render('default', 
             { title: 'Contact me'});
}
