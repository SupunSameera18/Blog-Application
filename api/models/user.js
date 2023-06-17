const mongoose = require('mongoose');
const {Schema, model} = mongoose;


const UserSchema = new Schema({
    userMail: {type: String, required: true, unique: true},
    hashedPassword: {type: String, required: true}
});

const UserModel = model('User', UserSchema);

module.exports = UserModel;