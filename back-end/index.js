const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const session = require('express-session');
const cookieParser = require('cookie-parser');

// PORT Declaration
const port = process.env.PORT || 5000;

const app = express();
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT"],
    credentials: true
}));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

const db = require('./models');
db.sequelize.sync()
.then(() => {
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    })
})