// blog-schema.js

var mongoose = require('mongoose');

var BlogSchema = new mongoose.Schema({
	author : {
		type : String,
		required : true,
	},
	title : {
		type : String,
		required : true
	},
	content : {
		type: String
	},
	created_at : Date,
	updated_at : Date
});

BlogSchema.pre('save', next=>{
	now = new Date();
	if(!this.created_at){
		this.created_at = now;
	}
	if(!this.updated_at){
		this.updated_at = now;
	}
	next();
});

BlogSchema.methods.isDuplicate = function(blogModel, callback) {
	var b = [];
	blogModel.find({title : this.title}, callback);
};



module.exports = mongoose.model("Blog", BlogSchema);