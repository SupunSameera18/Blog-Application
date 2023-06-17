const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const { default: mongoose, connection } = require('mongoose');
const user = require('./models/user')

const salt = bcrypt.genSaltSync(10);

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://0.0.0.0:27017/blog');

app.post("/register", async (req, res) => {
    const { userMail, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, salt);
    let userData = { userMail, hashedPassword };

    await user.create(userData).then(savedUser => {
        console.log('User saved successfully:', savedUser.userMail);
    })
        .catch(error => {
            console.error('Error saving user:', error);
        });
})

app.post("/login", async (req, res) => {
    const {userMail, password} = req.body;

    const info = await user.findOne({userMail: userMail});
    const verification = bcrypt.compareSync(password, info.hashedPassword);
    console.log(verification);
})

app.listen("4000", () => {
    console.log('Listening to port 4000');
})