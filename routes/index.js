var projects = require('../projects.json');

/*
 * GET home page.
 */


exports.viewAlt = function(request, response){
	response.render('index', projects);
};

exports.view = function(request, response){
  	response.render('index', projects);
};