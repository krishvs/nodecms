
module.exports.beforeFilters = [
]

module.exports.afterFilters = [
]

module.exports.index = function(req, res,next){
	console.log('>>>> The valeu of the original url is '+req.original)
  res.render('support/index',{user:'krishnan'});
};

module.exports.new = function(req, res){
  console.log('I am in new dashboard');	
  res.send('new forum');
};

module.exports.create = function(req, res){
  res.send('create forum');
};

module.exports.show = function(req, res){
  res.send('show forum ' + req.params.forum);
};

module.exports.edit = function(req, res){
  res.send('edit forum ' + req.params.forum);
};

module.exports.update = function(req, res){
  res.send('update forum ' + req.params.forum);
};

module.exports.destroy = function(req, res){
  res.send('destroy forum ' + req.params.forum);
};

