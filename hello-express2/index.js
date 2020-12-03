const http = require("http");
const express = require("express");

const app = express();  //make me a new app
const server = http.createServer(app);

//app, please listen for GET Requests
// "/" means they're asking for the home page
// the annoymous function will handle the HTTP Request
//and send back the HTTP Response
app.get("/", (req,res) => {
    // req and res are passed to my annonymous function
    // I need to make room for them with placeholders!
    res.send("Hello World!");
});


// "turn on the server"
// what port do I listen on (phone extention)
// what is my IP address? (office number)
// a callback that runs after we've started
server.listen(3000, 'localhost', () => {
    console.log("Running on port http://localhost:3000")
});