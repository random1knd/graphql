
const mongoose = require('mongoose')
const mongooseSchema = new mongoose.Schema({
	name:{
		type:String,
		required:true
	},
	work:{
		type:String,
		required:true
	}
})


module.exports = mongoose.model("details",mongooseSchema)
