// import node modules
const mongoose = require('mongoose');

// define a schema
const UserModelSchema = new mongoose.Schema ({
    name            :   String,
    fbid            :   String,
    profilePicture  :   String,
    school          :   String,
    bio             :   String,
    profilePicture  :   String,
    mealKeys        :   [String],
    mealsLiked      :   [String],   // allows us to not display meals that users have already liked
    usersLiked      :   [String],   // allows us to identify matches
    mealIndex       :   Number,
    matches         :   [String]
});

// compile model from schema
module.exports = mongoose.model('UserModel', UserModelSchema);
