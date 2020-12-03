const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

//imports the Express module using require()
const express = require('express');
//calls the express() function and stores the result in the app variable
const app = express();

//creates an HTTP server using our Express app
const server = http.createServer(app);
const db = require("./db");

app.get("/", (req,res) => {
    res.send("Hello from Express!");
});

app.get("/friends", (req,res) => {
    let htmlData = `<ul>`;
    for (let friend of db) {
        htmlData += `<li>${friend.name}</li>`;
    }
    htmlData += `</ul>`
    res.send(htmlData);
});
//The : at the beginning of :handle tells Express:
//This part of the path can be anything
//Express should create a variable called req.params.handle
app.get("/friends/:handle", (req,res) =>{
    //we destructure handle from req.params
    const {handle} = req.params;
    //We create a variable friend and assign it the result of calling db.find()
    //We pass db.find() a callback that determines if the handle matches
    const friend = db.find(f => f.handle === handle);
    let htmlData = ``;
    htmlData += `<h1>${friend.name}</h1>;`
    htmlData += `<h3>${friend.name}</h3>;`
    htmlData += `<h3>${friend.name}</h3>;`

    //we send friend.handle as part of an HTML String
    res.send(`<h1>${friend.handle}</h1>`)
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});



//.find() accepts a function argument
    //- will iterate through the Array, visiting each item.
    //- For each item, it will call the function and pass it the item.
//The function's only job is to figure out if the item it was passed is the one we are looking for.
    //-If it is, our function should return true
    //-If it is not, it should return false.