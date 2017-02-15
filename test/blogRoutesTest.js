var expect = require('chai').expect;
var blogRoutes = require('../routes/blog-routes.js');

describe("Blog API", function(){
	var url = "http://localhost:8080/blogs";

	describe("Get All Blogs", function(){
		it("returns status 200", function(){
			request(url, function(error, response, body){
				expect(response.statusCode).to.equal(200);
			});
		});
	});
});