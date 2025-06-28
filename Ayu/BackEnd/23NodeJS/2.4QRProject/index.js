import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

inquirer
  .prompt([
    {
    message: "Type in URL", // message takes what our question will be
    name: "URL", // name stores what repereseht our answer
    },
  ])

  .then((answers) => {
    const url = answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(require("fs").createWriteStream("i.svg"));

    fs.writeFile("url.text",url, (err) => {
        if(err) throw err;
        console.log("the File has been saved !");
    });
  })

  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });