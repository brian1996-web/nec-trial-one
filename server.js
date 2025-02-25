const express = require("express"); // imports express into node.js application
const mongoose = require("mongoose");
const app = express(); // app creates an instance of express.
const signup = require("./routes/signupRoutes.js"); //imports the signupRoutes into the server.js
const login = require("./routes/loginRoutes.js");

const crypto = require("crypto");
global.crypto = crypto;

const cors = require("cors");
app.use(cors()); // ✅ Always call middleware functions
// require("dotenv").config(); // Make sure this line is at the top

const bodyParser = require("body-parser");
app.use(bodyParser.json()); // Parse JSON data

app.use(express.json());

app.use("/signup", signup);
app.use("/login", login);

app.get("/", (req, res) => {
  res.send("hello brian my first time on render");
});

const dotenv = require("dotenv");
dotenv.config();


// Connecting to the database
require("dotenv").config();
console.log("MONGO_URI:", process.env.MONGO_URI); // Debugging line

const mongoURI = process.env.MONGO_URL; // Correct variable name

if (!mongoURI) {
  console.error("MONGO_URL is undefined. Check your .env file.");
  process.exit(1); // Stop the server if the database URL is missing
}


mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB Connection Error:", err));

require("dotenv").config();
const port = process.env.PORT || 3001;
const MONGO_URI = process.env.MONGO_URI;

app.listen(port, () => {
  console.log(`The server is running at port ${port}`);
});
