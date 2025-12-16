const express = require('express'); // importing way 
const connectDb = require('./config/db');
const todoSchema = require('./models/todo');


connectDb();

const app = express();

const PORT = 3000;

{/*app.get("/",()=>{
    console.log("get router")     to get output in terminal
})*/}

 app.get("/", (req, res) => {      {/*to get output in browser(postman)*/ }
    res.send("Get rooter");
});

 app.put("/", (req, res) => {
    res.send("Put rooter");
});

 app.post("/", (req, res) => {
    res.send("Post rooter");
});

 app.delete("/", (req, res) => {
    res.send("Delete rooter");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

