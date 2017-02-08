//createBlog.js
var exports = module.exports = {};
var Blog = require('./blog-schema.js');
var path = require('path');
var fs = require('fs');

// var rootdir = path.join(__dirname, "blog");
var rootdir = "./blog";

exports.addBlog = function(authorName, title, content) {
	var folderName = path.join(rootdir, "Test");
	try {
		fs.mkdirSync(folderName);

		var fileName = path.join(folderName, "testfile");
		fs.writeFileSync(fileName, content);
		
		var blog = new Blog();
		blog.author = authorName;
		blog.title = title;
		blog.contentPath = fileName;
		console.log(blog);
		return true;
	} catch(e){ 
		console.log(e);
		return false;
	}
};