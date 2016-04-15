'use strict';

var path = process.cwd();
var multer = require('multer');
var fs = require('fs');

var upload = multer({ 
	dest: path + '/public/uploads/',
	limits: {fileSize: 1000000, files:1},
});

module.exports = function (app, db) {


	app.route('/upload')
		.post(upload.single('file'), function(req, res) {
			res.json({fileSize: req.file.size});
		});

	app.route('/')
		.get(function(req, res) {
			res.sendFile(path + '/public/index.html');
		});
	
};

