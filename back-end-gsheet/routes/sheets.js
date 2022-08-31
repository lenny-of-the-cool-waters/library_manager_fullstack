// Dependencies
const {google} = require('googleapis');
const express = require('express');
const router = express.Router();

// Authentication
const auth = new google.auth.GoogleAuth({
    keyFile: '../keys.json',
    scopes: "https://www.googleapis.com/auth/spreadsheets"
})
// const authClientObject = await auth.getClient();

module.exports = router;