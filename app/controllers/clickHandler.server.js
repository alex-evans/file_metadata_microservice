'use strict';

var multer = require('multer');

var upload = multer({
    dest: process.cwd() + '../public/uploads/',
    limits: {fileSize: 1000000, files:1},
});


function clickHandler(db) {
    
    this.storeFile = function(req, res) {
        
    };
    
    this.uploadFile = function(req, res) {
        
    };
}

module.exports = clickHandler;