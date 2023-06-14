const express = require('express');
const cors = require('cors');
const { default: mongoose } = require('mongoose');
const user = require('./models/user')

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://0.0.0.0:27017/blog');

app.post("/register", async (req, res) => {
    const { userMail, password } = req.body;
    let userData = { userMail, password };

    await user.create(userData).then(savedUser => {
        console.log('User saved successfully:', savedUser.userMail);
    })
        .catch(error => {
            console.error('Error saving user:', error);
        });;

    res.json({ userData });
})

app.listen("4000", () => {
    console.log('Listening to port 4000');
})