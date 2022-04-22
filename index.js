const express = require('express')
const app = express()
const port = 5000
const {User} = require("./models/User");
const bodyParser = require('body-parser');

const mongoose = require('mongoose')
mongoose.connect(`mongodb+srv://chw-owo:gaenary0106@nodebasic.aryli.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,{
    useNewUrlParser: true, useUnifiedTopology :true
}).then(()=>console.log('MongoDB Connected...'))
.catch(err => console.log(err))

//parse 'application/x-www-form-urlencoded', 'json'
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get('/',(req,res) => res.send('Hello World!!'))
app.post('/register',(req,res)=>{

    const user = new User(req.body)

    user.save((err, userInfo)=>{
        if(err) return res.json({success:false, err})
        return res.status(200).json({success:true})
    })

})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))