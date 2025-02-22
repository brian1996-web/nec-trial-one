const express = require("express"); // imports express into node.js application
const mongoose = require("mongoose");
const app = express(); // app creates an instance of express.
const signup = require("./routes/signupRoutes.js"); //imports the signupRoutes into the server.js
const login = require("./routes/loginRoutes.js");

const crypto = require("crypto");
global.crypto = crypto;

const cors = require("cors");
app.use(cors()); // ✅ Always call middleware functions

const bodyParser = require("body-parser");
app.use(bodyParser.json()); // Parse JSON data

app.use("/signup", signup);
app.use("/login", login);

app.get("/", (req, res) => {
  res.send("hello brian my first time on render");
});

// Connecting to the database
mongoose
  .connect("mongodb://127.0.0.1:27017/WareDb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB Connection Error:", err));

require("dotenv").config();
const port = process.env.PORT || 3001;
const MONGO_URI = process.env.MONGO_URI;

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`The server is running at port ${PORT}`);
});
