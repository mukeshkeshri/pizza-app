mongoose = require('mongoose');


const Schema = mongoose.Schema

const menuSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    image: { type: String },
    price: {
        type: Number,
        required: true
    }

})

Menu = mongoose.model('Menu', menuSchema)

module.exports = Menu;