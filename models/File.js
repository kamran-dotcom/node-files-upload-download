const mongoose = require("mongoose");

const File = new mongoose.Schema({
    path:{
        type:String,
        required: true
    },
    originalName:{
        type: String,
        required: true
    },
    downloadCount:{
        type: Number,
        required: true,
        default: 0
    },
    password: String
});

module.exports = mongoose.model("File",File);