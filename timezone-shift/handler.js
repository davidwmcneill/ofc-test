"use strict"
const moment = require('moment');
module.exports = (event, context) => {
    let meeting = moment.utc(event.body.meeting)
    let adjusted = meeting.clone().utc().add(-8, 'hours');
    context
        .status(200)
        .succeed({ meeting: meeting.format(), adjusted: adjusted.format() });
}
