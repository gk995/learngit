const fs = require ("fs");

fs.writeFile("message.txt","NodeJS writes here",(err) => {
    if(err) throw err;
    console.log("file has been saved! ");
});

//fs.writefile(<file_name>, <messagetobewritten>, callback)