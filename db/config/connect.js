const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const URI = process.env.MONGO_URI;

const connect = async () => {
  await mongoose
    .connect(URI, {
      dbName: "mindpad",
    })
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((err) => {
      console.log("Error: ", err);
    });
};

module.exports = connect;
