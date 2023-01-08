require("dotenv").config()
const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrIParser: true,
            useUnifiedTopology: true
        });

        console.log("MongoDB Success");
    } catch (error) {
        console.error("MongoDB cunnection Fail")
        process.exit(1);
    }
}

module.exports = connectDB;