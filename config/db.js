const mongoose = require('mongoose')

const dbcontent = async () => {
    await mongoose.connect("mongodb://localhost:27017/TODO")
    console.log("Connected to MongoDB server");
}

module.exports = dbcontent