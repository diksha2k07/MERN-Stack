const express = require('express'); // importing way 
const connectDb = require('./config/db');
const todoSchema = require('./models/todo');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
connectDb();

const app = express();
app.use(express.json()); // to use json data from frontend
app.use(cors())

const PORT = process.env.PORT;

{/*app.get("/",()=>{
    console.log("get router")     to get output in terminal
})*/}



 app.get("/",async (req, res) => {      {/*to get output in browser(postman)*/ }
   try{
    const data = await todoSchema.find();         // to fetch all data from database
    res.json(data);                               // to send data in json format [objects inside array format]
   }
   catch(err){
    res.send(err);
   }
});

 app.post("/create",async (req, res) => {
    try{
        const newTodo = await todoSchema(req.body);
        const saveTodo = await newTodo.save();
        res.status(200).json(saveTodo);
    }
    catch(err){
        res.send(err);
    }
});

 app.put("/update/:id",async (req, res) => {
    try{
        const updatedTodo = await todoSchema.findByIdAndUpdate(req.params.id, req.body, {new:true});
        res.status(200).json(updatedTodo);
    }
    catch(err){
        res.send(err);
    }
 });

 app.delete("/delete/:id",async (req, res) => {
    try{
        await todoSchema.findByIdAndDelete(req.params.id);
        res.status(200).json({
            status:"Deleted successfully"
        });
    }
    catch(err){
        res.send(err);
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

