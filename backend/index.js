// Import required modules
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors"; // Import cors

// Load environment variables
dotenv.config();

// Initialize the Express app
const app = express();

// Middleware to enable CORS
app.use(cors()); // Allow all origins by default

// Middleware to parse JSON data
app.use(express.json());

// Get PORT and MONGO_URL from environment variables
const PORT = process.env.PORT || 5000;
const MONGO_URL = process.env.MONGO_URL;

// Define a schema for the data
const querySchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  country: { type: String, required: true },
  query: { type: String, required: true },
});

// Create a model from the schema
const Query = mongoose.model("Query", querySchema);

// Connect to MongoDB Atlas
mongoose
  .connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

// POST API to save data
app.post("/api/queries", async (req, res) => {
  try {
    const { name, email, phone, country, query } = req.body;
    

    // Validate request data
    if (!name || !email || !phone || !country || !query) {
      return res.status(400).json({ error: "All fields are required." });
    }

    // Create and save the data to the database
    const newQuery = new Query({ name, email, phone, country, query });
    await newQuery.save();

    res.status(201).json({ message: "Query saved successfully.", data: newQuery });
  } catch (error) {
    console.error("Error saving query:", error);
    res.status(500).json({ error: "Internal server error." });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
