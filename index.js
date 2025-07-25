/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";
inquirer
  .prompt([
    {
        messsage:"Type in your URL:",
        name:"URL"},
    /* Pass your questions in here */
     ])
  .then((answers) => {
    const url=answers.URL;
    var qr_img=qr.image(url);
    qr_img.pipe(fs.createWriteStream("qr_img.png"));
    console.log("QR code generated and saved as qr_img.png");
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });