
const mongoose = require('mongoose')
const {GraphQLString,GraphQLInt,GraphQLNonNull, GraphQLObjectType, GraphQLList, GraphQLSchema,buildSchema} = require('graphql')
const {graphqlHTTP} = require('express-graphql')
const express = require('express')
const app = express()
const details = require('.//schema/detailsSchema')
const friends = require('.//schema/friendsSchema')

mongoose.connect("mongodb://localhost/graphql",()=>{
	console.log("connected to the database")
})


// const detailsType = new GraphQLObjectType({
// 	name:"details",
// 	description:"These are the details",
// 	fields:()=>({
// 		name:{type:GraphQLString},
// 		work:{type:(GraphQLString)}	
// 	})
// })

// const friendsType = new GraphQLObjectType({
// 	name:"friends",
// 	description:"this is about the friends",
// 	fields:()=>({
// 		friends:{type:(GraphQLString)}
// 	})
// })


// const RootQueryType = new GraphQLObjectType({
// 	name:'Query',
// 	description:'This is the main query ',
// 	fields:()=>({
// 		details:{
// 			type:new GraphQLList(detailsType),
// 			description:'list of details',
// 			resolve:()=> details.find() 
// 		},
// 		friends:{
// 			type:new GraphQLList(friendsType),
// 			description:"list of the friends",
// 			resolve:()=> friends.find()
// 		}
// 	})
// })
// const schema = new GraphQLSchema({
// 	query:RootQueryType
// })

var things = ["firstThing","secondThing","thirdThing"]

var schema = buildSchema(`
	type Query{
		hello:${GraphQLString},
		values:[String],
		singleValue(index:${GraphQLInt}):String
	}
`)

var root = {
	hello:()=>{
		return "This is a simple string"
	},
	values:()=>{
		return things
	},
	singleValue: ({index})=>{
		return things[index]
	}
}








app.use("/graphql",graphqlHTTP({
	graphiql:true,
	rootValue:root,
	schema:schema
}))


app.get("/",(req,res)=>{
	// const detail = new details({name:"dikshith",work:"engineer"})
	// detail.save()
	res.send("this is the home page")
})
app.get("/friends",(req,res)=>{
	const friend = new friends({friends:"random1knd"})
	friend.save()
	res.send("friends has been made")
})
app.listen(5000,()=>{
	console.log("listening on port 5000")
})




