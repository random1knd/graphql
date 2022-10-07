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
const details = require('.//schema/detailsSchema')
const friends = require('.//schema/friendsSchema')
mongoose.connect("mongodb://localhost/graphql",()=>{
	console.log("connected to the database")
})





app.get("/",(req,res)=>{
	res.send("this is the home page")
})

app.listen(5000,()=>{
	console.log("listening on port 5000")
})