require('dotenv').config();

const mongoose = require("mongoose");

const uri = "mongodb+srv://sahilkumarclass10:NnKPjQoiM6huv5WR@cluster0.e4ulocy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";


const connectDB = async () => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    console.log("Connection to MongoDB Successful");
  } catch (error) {
    console.error("Connection to MongoDB failed:", error);
  }
};

module.exports = connectDB;



// const { MongoClient, ServerApiVersion } = require('mongodb');

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);


// Example schema definition
// const userSchema = new mongoose.Schema({
//     name: { type: String, required: true, index: true }, // Index created for the "name" field
//     email: { type: String, required: true, unique: true, index: true } // Index created for the "email" field
// });

// Rest of your code...
