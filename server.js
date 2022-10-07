// const express = require('express')
// const app = express()

// const {buildSchema } = require('graphql')



// const schema = buildSchema(`
// 	type something {
// 		id:ID 
// 		name:String
// 	}
// 	`)


// 	type Query{
// 		getCouse(id:ID):Course
// 	}

// app.listen(8000,()=>{
// 	console.log("server has started")
// })

const mongoose = require('mongoose')
const {graphql,buildSchema} = require('graphql')
const express = require('express')
const app = express()
mongoose.connect("mongodb://localhost/graphql",()=>{
	console.log("connected to the database")
})

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

mongoose.model("details",mongooseSchema)

const mongooseSchema1 = new mongoose.Schema({
	friends:{
		type:String,
		required:true,

	}
})

mongoose.model("friends",mongooseSchema1)
app.get("/",(req,res)=>{
	res.send("this is the home page")
})

app.listen(5000,()=>{
	console.log("listening on port 5000")
})