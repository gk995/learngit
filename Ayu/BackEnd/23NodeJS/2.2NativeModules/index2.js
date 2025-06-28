const fs = require("fs");

fs.readFile("./message.txt",'utf8',(err,data) => {
    if(err) throw err;
    console.log(data);
});

// fs.readFile("location of file to be read wrt this file",'data type of our output',callback function))
