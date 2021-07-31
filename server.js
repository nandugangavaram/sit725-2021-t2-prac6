let express = require("express");
let app = express();

let http = require("http").createServer(app);
let io = require("socket.io")(http);

var port = process.env.PORT || 8080;

app.use(express.static(__dirname + "/public"));

app.get("/test", function (request, response) {
  var user_name = request.query.user_name;
  response.end("Hello " + user_name + "!");
});

//socket test
io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

app.listen(port, () => {
  console.log("Listening on port ", port);
});