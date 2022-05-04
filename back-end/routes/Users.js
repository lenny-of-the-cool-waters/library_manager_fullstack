const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const axios = require("axios");
const sequelize = require("sequelize");
const { v4: uuidv4 } = require("uuid");

// Databases
const { Users } = require("../models");

// Middleware
const { signToken } = require("../middleware/Tokens");
const Op = sequelize.Op;

// Enable cookies attachment to axios requests
axios.defaults.withCredentials = true;

// Get all users
router.get("/getAll", async (req, res) => {
  const userList = await Users.findAll();
  res.json(userList);
});

// Get Individual user
router.get("/getOne/:username", async (req, res) => {
  const user = await Users.findOne({
    where: { username: { [Op.like]: `%${req.params.username}%` } },
  });
  res.json(user);
});

// Create a new user
router.post("/create", async (req, res) => {
  const { username, password, email, role = 1 } = req.body;
  const user = await Users.findOne({ where: { username: username } });

  if (user) {
    res.json({ error: "User already exists", debugging: user });
  } else {
    bcrypt.hash(password, 13).then((hash) => {
      let id = uuidv4();

      Users.create({
        id,
        username,
        password: hash,
        role,
        email,
      });

      res.json(`${username}'s account created successfully`);
    });
  }
});

// Login existing user
router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await Users.findOne({ where: { username: username } });

  if (!user) {
    res.json({ error: "User does not exist" });
  } else {
    if (!user.resetPassword) {
      bcrypt.compare(password, user.password).then((match) => {
        if (!match) {
          res.json({ error: "Invalid username and password combination" });
        } else {
          const accessToken = signToken({
            id: user.id,
            username: user.username,
            email: user.email,
            role: user.role,
          });

          res
            .cookie("accessToken", accessToken, {
              httpOnly: true,
              maxAge: 1000 * 60 * 60 * 24,
              path: "/",
              secure: process.env.NODE_ENV === "production",
            })
            .json({
              accessToken,
              id: user.id,
              username: user.username,
            });
        }
      });
    } else {
      res.json({ error: "Incomplete password reset" });
    }
  }
});

// User logout
router.get("/logout", async (req, res) => {
  return res
    .clearCookie("accessToken")
    .status(200)
    .json({ message: "Successfully logged out" });
});

// Reset user password
router.post("/resetPassword/reset", async (req, res) => {
  const { username, email } = req.body;
  const user = Users.findOne({ where: { username: username } });

  if (!!user) {
    let pseudoPassword = uuidv4();
    Users.update(
      { password: pseudoPassword, resetPassword: true },
      { where: { username: username } }
    ).then(() => {
      res.json({ message: "Initiated password reset" });
    });
  } else {
    res.json({ error: "Invalid username and email combination" });
  }
});
router.post("/resetPassword/change", async (req, res) => {
  const { username, password } = req.body;
  const user = await Users.findOne({ where: { username: username } });

  if (!!user && user.resetPassword) {
    Users.update(
      { password: password, resetPassword: false },
      { where: { username: username } }
    ).then(
      () => {
        return res.json({ message: "Password reset successfully" });
      },
      () => {
        return res.json({ error: "Unable to reset password" });
      }
    );
  } else if (!user) {
    res.json({ error: "Invalid username" });
  } else if (!user.resetPassword) {
    res.json({ error: "Initiate new password reset" });
  }
});

module.exports = router;
