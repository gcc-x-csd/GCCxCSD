const mongoose = require('mongoose');

const FAQ_Schema = new mongoose.Schema({
       question: {type: String, required: true},
       answer: {type: String, required: true},
});

mongoose.models = {}

export default mongoose.model("frequently_asked_questions", FAQ_Schema);