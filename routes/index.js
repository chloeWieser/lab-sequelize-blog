const express = require('express');
const router = express.Router();
const db = require('../models');  //looks for index file by default- pulls in instance of database


router.get('/', (req, res) => {

  res.render('index')
})

//GET blogs to display
//localhost:3000/blogs
router.get('/blogs', async (req, res) => {
  try {
    let records = await db.blogs.findAll();

    res.json(records)
    console.log(records);
  }
  catch (error) {
    console.log(error);
    res.json({})
  }
})


//GET blogs by ID
//localhost:3000/blogs/1

// router.get('/blogs/:id', async (req, res) => {

//   try {
//     let id = req.params.id;
//     let record = await db.blogs.findByPk(id)
//     res.json(record);
//   }
//   catch (error) {
//     res.json({})
//   }
// })


module.exports = router;
