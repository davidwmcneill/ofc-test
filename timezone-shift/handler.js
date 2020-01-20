"use strict"
const moment = require('moment');
const readline = require('readline');
const fs = require('fs');
//const readInterface = readline.createInterface({
 //   input: fs.createReadStream('/var/openfaas/secrets/api-key')//,
    // output: process.stdout,
    // console: false
//});


module.exports = (event, context) => {
    let meeting = moment.utc(event.body.meeting)
    let adjusted = meeting.clone().utc().add(-8, 'hours');
    context
        .status(200)
        .succeed({ meeting: meeting.format(), adjusted: adjusted.format() });
    fs.readFile('/var/openfaas/secrets/api-key', 'utf-8', (err, data) => {
        if(err) { throw err; }
        console.log('data: ', data);
        });
}
