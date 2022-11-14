const dotenv = require('dotenv').config();
const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();


const PORT = process.env.PORT || 3000;

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

//routes
app.get('/', (req, res)=>{
  res.send("Home Page");
});

app.get('/about', (req, res)=>{
  res.send("about");
});

app.get('/test', (req, res)=>{
  res.send("Testing");
});


//connect to MonogoDB 
mongoose.connect(process.env.MONGO_URI).then(()=>{
  app.listen(PORT,()=>{
    console.log(`server running:: port ${PORT}`)
  })
}).catch((err)=> console.log(err)) 

