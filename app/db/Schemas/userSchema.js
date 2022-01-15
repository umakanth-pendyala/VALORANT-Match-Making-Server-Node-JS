const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      requured: true,
    },
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        enum: ["Male", "Female"],
        required: true
    },
    age: {
        type: Number,
        required: true
    }
});

const User = mongoose.model("user", userSchema)
module.exports = User