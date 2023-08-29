const mongoose = require('mongoose');

const UpcomingEvents_Schema = new mongoose.Schema({
       topic: {type: String, required: true},
       speaker: {type: String, default: 'Department of Computer Science'},
       description: {type: String, required: true},

       day: {type: String, required: true},
       month: {type: String, required: true},
       year: {type: Number, required: true},

       hour: {type: Number, required: true},
       minute: {type: Number, default: '00'},
       am_pm: {type: String, required: true},

       gmeet_url: {type: String},

});

mongoose.models = {}
export default mongoose.model("upcoming_events", UpcomingEvents_Schema);