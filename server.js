const express = require('express');
const app = express();

app.use(express.json());

let user = null;

app.post('/signup', (req, res) => {
    const {username, email, password, dob} = req.body;
    if(!username || !email || !password || !dob){
        return res.status(400).send("All fields are required.");
    }

    if(password.length < 8 || password.length > 16){
        return res.status(400).send("password must be 8 to 16 characters.");
    }

    user = {username, email, password, dob};
    res.status(201).send("User created.");
});

app.get('/user', (req, res) => {
    if(!user){ 
        return res.status(404).send("User not found.");
    }
    res.json;
});

app.get('/', (req, res) => {
    res.send(<h1>Backend is deployed.</h1>);
});

// PORT = 3000;
app.listen(3000, () => console.log("Server is running on 3000."));