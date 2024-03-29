import bodyParser from "body-parser";
import express from "express";
import  mongoose  from "mongoose";
import cors from 'cors';
import postRoutes from './routes/posts.js';

const app= express();
app.use(cors());
app.use('/posts',postRoutes);
app.use(bodyParser.json({limit:'30mb',extended:'true'}))
app.use(bodyParser.urlencoded({limit:'30mb',extended:'true'}))

const CONNECTION_URL='mongodb+srv://anandmishra71996:anand%40123@cluster0.ypq9k.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT= process.env.PORT || 5000;
mongoose.connect(CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
    app.listen(PORT,()=>{
        console.log(`server is running on port ${PORT}`);
    })
}).catch((err)=>{
    console.log(err);
})