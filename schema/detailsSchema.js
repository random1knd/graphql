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


module.exports = mongoose.model("friends",mongooseSchema)
