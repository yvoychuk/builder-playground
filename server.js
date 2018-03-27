var express = require("express");
var app = express();

app.get(
  "/",
  (req, res) => {
    res.sendFile(
      "index.html",
      {
        root: __dirname + "/public"
      }
    )
  }
)

app.use(express.static("public"))

var port = 3010;

app.listen(
  port,
  () => {
    console.log("started on port:", port)
  }
)