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
const {GraphQLString,GraphQLInt,GraphQLNonNull, GraphQLObjectType, GraphQLList, GraphQLSchema} = require('graphql')
const {graphqlHTTP} = require('express-graphql')
const express = require('express')
const app = express()
const details = require('.//schema/detailsSchema')
const friends = require('.//schema/friendsSchema')
mongoose.connect("mongodb://localhost/graphql",()=>{
	console.log("connected to the database")
})


const detailsType = new GraphQLObjectType({
	name:"details",
	description:"These are the details",
	fields:()=>({
		name:{type:(GraphQLString)},
		work:{type:(GraphQLString)}	
	})
})

const RootQueryType = new GraphQLObjectType({
	name:'Query',
	description:'Root Query',
	fields:()=>({
		details:{
			type: new GraphQLList(detailsType),
			description:'list of details',
			resolve:()=> details.find() 
		}
	})
})
const schema = new GraphQLSchema({
	query:RootQueryType
})

app.use("/graphql",graphqlHTTP({
	graphiql:true,
	schema:schema
}))


app.get("/",(req,res)=>{
	// const detail = new details({name:"dikshith",work:"engineer"})
	// detail.save()
	res.send("this is the home page")
})

app.listen(5000,()=>{
	console.log("listening on port 5000")
})




//From here



// var express = require('express');
// var { graphqlHTTP } = require('express-graphql');
// var { buildSchema } = require('graphql');

// // Construct a schema, using GraphQL schema language
// var schema = buildSchema(`
//   type Query {
//     hello: String
//   }
// `);

// // The root provides a resolver function for each API endpoint
// var root = {
//   hello: () => {
//     return 'Hello world!';
//   },
// };

// var app = express();
// app.use('/graphql', graphqlHTTP({
//   schema: schema,
//   rootValue: root,
//   graphiql: true,
// }));
// app.listen(4000);
// console.log('Running a GraphQL API server at http://localhost:4000/graphql');