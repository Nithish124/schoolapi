const express=require('express');
const mongoose=require('mongoose');
const schoolRoutes = require('./routes/authroutes'); 
const app=express();
app.use(express.json());
const dbURI='mongodb+srv://nithish_123:nithish123@cluster0.tmegy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(dbURI)
    .then((result)=>app.listen(5000))
    .catch((err)=>console.log(err));
app.use(schoolRoutes);
    
