const express=require('express');
const mongoose=require('mongoose');
const schoolRoutes = require('./routes/authroutes'); 
const app=express();
app.use(express.json());
const dbURI='mongodb://127.0.0.1:27017/schoolapi';
mongoose.connect(dbURI)
    .then((result)=>app.listen(5000))
    .catch((err)=>console.log(err));
app.use(schoolRoutes);
    
