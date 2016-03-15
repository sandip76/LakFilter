'use strict';
var express=require("express");
var app=express();
var routs=express.Router();
var bodyParser=require("body-parser");
var path=require("path");
var methodOverride=require("method-override");
var mongoose=require("mongoose");

var envirment=process.env.NODE_ENV=process.env.NODE_ENV || 'config1';
var configr=require(__dirname+"/config/routes/"+envirment);

console.log(configr);
mongoose.connect(configr.mongo.url,function(err){
	if(!err){
		console.log("Successfully connected");
	}else{
		console.log(err);

	}
});

	app.use(bodyParser.urlencoded({extended:true}));
	app.use(bodyParser.json());
	app.use(methodOverride());


	app.get("/hello",function(res){
		console.log("Hello Sandip");
	})
	require('./routes')(app);

	app.listen(configr.server.port);
	console.log("Server start on this port"+configr.server.port);
