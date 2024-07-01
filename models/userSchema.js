const { name } = require("ejs");
const mongoose = require("mongoose")



const userSchema = new mongoose.Schema({
    email: String,

});

const emailcollection = mongoose.model("", userSchema);

module.exports = emailcollection;