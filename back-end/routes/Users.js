// node modules
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const axios = require('axios');
// const { v4: uuidv4 } = require('uuid');
const { sign, verify } = require('jsonwebtoken');

// Database
const { Users } = require('../models');
// const Authorization = require('../middleware/Authorization');

// enable cookie attachment to axios requests
axios.default.withCredentials = true;

// Create new user
router.post('/create-user', async(req, res) => {
    const { username, password, role, email } = req.body;
    const user = await Users.findOne({ where: { username: username }});

    if(user) {
        res.json({ error: "User already exists", debugging: user })
    } else {
        bcrypt.hash(password, 13).then((hash) => {
            Users.create({
                username, email, role,
                password: hash
            })

            res.json("User created successfully");
        })
    }
})

// Login user
router.post('/login', async(req, res) => {
    const { username, password } = req.body;
    const user = Users.findOne({ where: { username: username }})

    if(!user) {
        res.json({ error: "User doesn't exist" })
    } else {
        const accessToken = sign(
            { username: user.username, id: user.id, role: user.role },
            'NoaJdkjsad9'
        )

        res.cookie('accessToken', accessToken, {
            httpOnly: true,
            maxAge: 1000*60*60*24,
            path: '/',
            secure: process.env.NODE_ENV === 'production'
        });

        res.json({
            accessToken, role, username, email, id
        })
    }
})