const mongoose = require('mongoose');

const RankHolder_Schema = new mongoose.Schema({
       name: {type: String, required: true},
       rank: {type: String, required: true},
       year: {type: Number, required: true}
});

mongoose.models = {}

export default mongoose.model("rank_holders", RankHolder_Schema);