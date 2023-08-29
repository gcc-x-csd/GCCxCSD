const mongoose = require('mongoose');

const UserMessages_Schema = new mongoose.Schema({
       fullname: {type: String, required: true},
       email: {type: String, required: true},
       message: {type: String, required: true},
});

mongoose.models = {}

export default mongoose.model("user_messages", UserMessages_Schema);