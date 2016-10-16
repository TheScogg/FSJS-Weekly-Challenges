//See readme for challenge instructions

//DONE: Task 1: Set up github.js as a module that exports function getRepos() and include and use it in app.js
//DONE: Task 2: Program getRepos() function to get the public repos from a github username and write a list of the repo names to the console
//DONE: Task 3: Pull in the username for whom the program will pull repos from a command line argument
//Bonus Task 1: Explore the github api to display additional information
//Bonus Task 2: Re-work program as a web app (use node to create localhost webserver and get username as part of url)

var http = require("http");
var express = require("express");
var app = express();
var github = require("./github");

http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("CREATED SERVER");

    var username = request.url.slice(1);
    github.getRepos(username);


    response.end();
}).listen(80);


