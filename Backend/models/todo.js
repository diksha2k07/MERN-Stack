const mongoose = require('mongoose');

//a backend for todo created in frontend
const todoSchema = new mongoose.Schema({
    task: {type: String, required: true},
    completed: {type: Boolean, default: false}
});

module.exports = new mongoose.model("todo", todoSchema);