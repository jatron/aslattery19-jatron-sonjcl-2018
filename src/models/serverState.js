// import node modules
const mongoose = require('mongoose');

// define a schema
const ServerStateModelSchema = new mongoose.Schema ({
    variableName    : String,
    numberValue     : Number
});

// compile model from schema
module.exports = mongoose.model('ServerStateModel', ServerStateModelSchema);