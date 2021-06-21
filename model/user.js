mongoose = require('mongoose');


const Schema = mongoose.Schema

const userSchema = new Schema({
    gmail: {
        type: String,
        required: true
    },
    password: { type: String },
    cart: {
        type: Number,
        required: true
    }

})

Useru = mongoose.model('Useru', menuSchema)

module.exports = Useru;