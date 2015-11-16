exports.home = function(req, res){
  res.render('default', 
    {title: 'Home',
     classname: 'home',
     users: ['Jon', 'Jack', 'Lurido', 'Valerio']
    });
}

exports.about = function(req, res){
  res.render('default', 
    {title: 'About me',
     classname: 'about',
    });
}

exports.projects = function(req, res){
  res.render('default',
    { title: 'Projects',
      classname: 'projects'
    });
}

exports.contact = function(req, res){
  res.render('default', 
    { title: 'Contact me',
      classname: 'contact'
    });
}
