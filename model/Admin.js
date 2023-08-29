const mongoose = require('mongoose');

const Admin_Schema = new mongoose.Schema({
       email: {type: String, required: true, unique: true},
       password: {type: String, required: true},
});

mongoose.models = {}

export default mongoose.model("admins", Admin_Schema);