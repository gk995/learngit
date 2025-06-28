import express from "express";
const app = express();
const port = 3000;

app.get("/",(req,res) => {
    //console.log(req.rawHeaders);
    res.send("<h1 style = 'color:red' >address '/' is being called!</h1>");
});

app.get("/contact",(req,res) => {
    //console.log(req.rawHeaders);
    res.send("<h1 style = 'color:red' >address '/contact' is being called!</h1>");
});

app.get("/about",(req,res) => {
    //console.log(req.rawHeaders);
    res.send("<h1 style = 'color:red' >address '/about' is being called</h1>");
});

app.listen(port, () => {
    console.log(`server started on ${port}.`);
});