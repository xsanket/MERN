import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';


inquirer
  .prompt([
    {
        message: "write the url of your website",
        name: "URL",
    },
  ])
  .then((answers) => {
    const url =answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('url.png'));


    fs.writeFile("url.txt", url, (err) =>{
        if(err) throw err;
        console.log("file saved successfully")
    })
  })
  .catch((error) => {
    if (error.isTtyError) {
      
    } else {
      
    }
  });


