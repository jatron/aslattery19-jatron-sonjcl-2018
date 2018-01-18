// import node modules
const mongoose = require('mongoose');

// define a schema
const PictureModelSchema = new mongoose.Schema ({
    key             :   String,
    userId          :   String,
    tagline         :   String,
    description     :   String,
    ingredients     :   String,
    allergens       :   String
});

// compile model from schema
module.exports = mongoose.model('PictureModel', PictureModelSchema);
