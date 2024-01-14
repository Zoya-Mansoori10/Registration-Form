const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const Login =require('./models/login')


const app = express();
const PORT = process.env.PORT || 5000;

// mongoose.connect('mongodb://0.0.0.0:27017/registration',
//  //{ useNewUrlParser: true, useUnifiedTopology: true }
//  ).then(()=>{
//     console.log("Database connected")
//  }).catch((e)=>{
//     console.log(e)
//     console.log("Database can't connect ")
//  })

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String
});

const User = mongoose.model('User', userSchema);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/register.html');
});

app.post('/register', (req, res) => {
    const { username, email, password } = req.body;

    const newUser = new User({
        username: username,
        email: email,
        password: password
    });

   

    newUser.save((err) => {
        // then(()=>{
        //     console.log("User registered successfully.")
        // }).catch((err)=>{
        //     console.log("Error registering user.")
        // })
        
        if (err) {
            console.error(err);
            res.send('Error registering user.');
        } else {
            res.send('User registered successfully.');
        }
    });


});

//to store data from login

app.post('/register',(req,res)=>{
    let data=new Login({
        name:req.body.username,
        email:req.body.email,
        password:req.body.password
    })
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
