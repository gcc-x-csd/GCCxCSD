const mongoose = require('mongoose');

const AccessCode_Schema = new mongoose.Schema({
       access_code: {type: String, required: true, unique: true},
});

mongoose.models = {}
export default mongoose.model("protected_views", AccessCode_Schema);