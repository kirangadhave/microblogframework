// blog-schema.js

module.exports = class Blog {
	constructor(){
		this.date = new Date();
		this.author = [];
		this.title = "";
		this.contentPath = "";
	}
};