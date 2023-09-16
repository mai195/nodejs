const {Schema, model} = require('mongoose')
const validator = require('validator')

const userSchema = new Schema({
    name: {
        type: String, 
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value){
            if(!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 7,
        validate(value){
            if(value.toLowerCase().includes("password")) {
                throw new Error('password is too simple')
            }
        }
    },
    age: {
        type: Number, 
        default: 0,
        validate(value) {
            if (value < 0) {
                throw new Error('Age must be a positive number')
            }
        }
    }
})

const User = model('User', userSchema)

module.exports = User
