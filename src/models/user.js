// import node modules
const mongoose = require('mongoose');

// define a schema
const UserModelSchema = new mongoose.Schema ({
    name            :   String,
    fbid            :   String,
    school          :   String,
    bio             :   String,
    profilePicture  :   String,
    mealKeys        :   [String],
    mealsLiked      :   [String],
    mealIndex       :   Number,
    matches         :   [String]
});

// compile model from schema
module.exports = mongoose.model('UserModel', UserModelSchema);
