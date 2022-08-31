// Dependencies
const express = require("express");
const cors = require('cors');
const { google } = require("googleapis");

// Express instance
const app = express();
app.use(express.urlencoded({ extended: true }));
// CORS configs
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"]
}))

// PORT
const PORT = process.env.PORT || 3001;

// Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
