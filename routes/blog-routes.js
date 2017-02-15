// blog-routes.js

module.exports = function(app, mongoose){
	var Blog = require('../blog/blog-schema.js');

	app.get('/blogs', function(req, res){
		Blog.find({}, function(err, blogs){
			if(err)
				res.send(err);
			res.json(blogs);
		});
				
	});

	app.get('/blogs/:id', function(req, res){
		Blog.findById(req.params.id, function(err, blog){
			if(err)
				res.send(err);
			res.json(blog);
		});
	});

	app.post('/blogs', function(req, res){
		Blog.find({}, function(err, blogs){
			if(err)
				res.send(err);

			var exists = false;

			blogs.forEach(function(b){
				if(b.title === req.body.title)
					exists = true;
			});

			if(!exists){
				var blog = new Blog();

				blog.author = req.body.author;
				blog.title = req.body.title;
				blog.content = req.body.content;

				blog.save(function(err){
					if(err)
						res.send(err);
					res.send('Saved blog!\n' + blog);
				});
			} else {
				res.send('Title Exists');
			}
		});
	});

	app.put('/blogs/:id', function(req, res){
		Blog.findById(req.params.id, function(err, blog){
			if(err)
				res.send(err);
			
			if(req.body.author === blog.author){
				blog.author = req.body.author;
				blog.content = req.body.content;
				blog.updated_at = new Date();
			}

			blog.save(function(err){
				if(err)
					res.send(err);
				res.send('Saved blog!\n' + blog);
			});
		});
	});

	app.delete('/blogs/:id', function(req, res){
		Blog.remove({ _id : req.params.id }, function(err){
			if(err)
				res.send(err);
			res.json("Deleted");
		});
	});

};