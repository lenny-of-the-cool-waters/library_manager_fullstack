const express = require("express");
const router = express.Router();
const sequelize = require("sequelize");

// Databases
const { Books, ReadingStats } = require("../models");

router.get("/all", async (req, res) => {
  let query = `SELECT * FROM Books`;
  const [results, metadata] = await Books.sequelize.query(query);
  res.json(results);
});

router.get('/data', async(req,res) => {
    // let query = `SELECT b.bookSeries,b.bookName,b.author,b.releaseDate,b.genre,r.status FROM Books AS b INNER JOIN ReadingStats AS r ON `;
    const stats = await Books.findAll({ include: ReadingStats});
    res.json(stats);
})

module.exports = router;
