const fs = require('fs');
const request = require('request');
const args = process.argv.slice(2);
const url = args[0]
const local = args[1]


request(url, (error, response, body) => {
 console.log('error:', error); 
 console.log('statusCode:', response && response.statusCode); 
 console.log('body:', body); 

  fs.writeFile(local, body, error => {
   if (error) {
    console.log(error)
   }
   if (body) {
    console.log(`Downloaded and saved ${body.length} bytes to ${local}`)
   }
  })
})