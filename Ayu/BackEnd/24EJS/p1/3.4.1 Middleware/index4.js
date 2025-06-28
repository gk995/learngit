import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

var bandname = "";
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended : true})); // as we need the names which are in the body of the incoming data

function bandNameGenerator(req, res, next){
  console.log(req.body);
  bandname = req.body["street"] + req.body["pet"];
  next();
}

app.use(bandNameGenerator);

app.get("/", (req, res) => { //get mean they will request us for the data and form where we'll send the response (sending the data from the server)
  res.sendFile(__dirname + "/public/index.html") //in get - data is sent in url
});

app.post("/submit", (req,res) => { // it is the sending the data to the server
  res.send(`<h1>your band name is ${bandname}.</h1>`); //in post - data is sent in the body of the request
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});