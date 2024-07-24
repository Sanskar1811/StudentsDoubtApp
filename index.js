const express = require("express") ; 
const cors = require("cors") ; 
const { MongoClient } = require("mongodb");  

const app = express();
app.use(cors());
app.use(express.json()); 

app.post("/save" , (req, res ) => {
	let url = "mongodb+srv://sanskargawade85:vRn0wP6dLvHJf8cG@cluster0.rvcuuye.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0" ; 
	let client = new MongoClient(url);
	let db = client.db("sdata24"); 
	let coll = db.collection("student");
	let records = {name : req.body.name , phone : req.body.phone  , doubt : req.body.doubt } ;
	coll.insertOne(records)
	.then(result => res.send(result))
	.catch(error => res.send(error)); 

}) ;

app.listen(9000 , ()=> { console.log("Ready to serve at @9000") ; }) ;  