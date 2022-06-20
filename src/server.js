



// const express = () => {};
const express = require('express');

let app = express();







app.get("/", (req, res) => {
    res.sendFile(__dirname + "./assets/users.html");
}).get("/users", (req, res) => {
    res.sendFile(__dirname + "./assets/user.json");
}).get("/users/:id", (req, res) => {
    res.sendFile(__dirname + "./assets/user.json");
}).post("/users", (req, res) => {
    res.sendFile(__dirname + "./assets/user.json");
}).listen(8000);



module.exports = app;


