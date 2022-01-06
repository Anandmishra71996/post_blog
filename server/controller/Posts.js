import postMessage from "../models/postMessage.js"
export const getPosts=async (req,res)=>{
   try {
   const postmessage=await postMessage.find();
   res.status(200).json(postmessage);
   } catch (error) {
       console.log({'message':error.message})
   }
   
}

export const createPosts=async (req,res)=>{
const post= req.body;
const newPost= new postMessage(post);
try {
    await postMessage.bulkSave();
    res.status(201).json(post);
} catch (error) {
    console.log({'message':error.message})
}
}