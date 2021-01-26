const mongoose = require('mongoose')
require("dotenv").config();
//change password and name (test123) (tester)
MONGO_URL = "mongodb+srv://fergus:test123@cluster0.hoe7x.mongodb.net/tester?retryWrites=true&w=majority"

const connection = async () => {
    try{
        awaitmongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true});
       console.log("succesfully conected to MongoDB") 
} catch (error) {
        console.log(error);
    }
};
    

connection();