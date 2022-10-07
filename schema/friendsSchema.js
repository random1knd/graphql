
const mongooseSchema1 = new mongoose.Schema({
    friends:{
        type:String,
		required:true,
        
	}
})

module.exports = mongoose.model("details",mongooseSchema)