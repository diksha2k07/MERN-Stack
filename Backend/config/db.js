const mongoose = require('mongoose');

const connectDb = async () => {
    try 
    {
        // await mongoose.connect("mongodb://localhost:27017/task");
        await mongoose.connect(process.env.MONGO_URL);
        console.log("MongoDB connected successfully");
    }
     catch (error) 
    {
        console.log(error);
    }
}

module.exports = connectDb;
