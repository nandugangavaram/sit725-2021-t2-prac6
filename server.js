require("dotenv").config();
let client = require("dbConnect");
let express = require("express");

let http = require("http").createServer(app);
let io = require("socket.io")(http);

var port = process.env.PORT || 5500;

app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get("/about", function (request, response) {
  response.sendFile(__dirname + "/public/about.html");
});

// //socket test
// io.on("connection", (socket) => {
//   console.log("a user connected");
//   socket.on("disconnect", () => {
//     console.log("user disconnected");
//   });
// });

app.listen(port, () => {
  console.log("Listening on port ", port);
  client.createCollection("Recipes");
});

module.exports = {insertRecipe, getRecipes};