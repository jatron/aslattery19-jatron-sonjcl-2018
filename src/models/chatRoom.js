// import node modules
const mongoose = require('mongoose');

// define a schema
const ChatRoomModelSchema = new mongoose.Schema ({
    namespace       : String,
    messages        : [{userName: String, message: String}]
});

// compile model from schema
module.exports = mongoose.model('ChatRoomModel', ChatRoomModelSchema);
