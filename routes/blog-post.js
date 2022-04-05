
// const express = require('express');
// const router = express.Router();
// const db = require('../models'); //looks for index file by default- pulls in instance of database

// router.get('/blog-post/:id', async (req, res) => {

//     try {   ///moved over from index.js 4.1
//         let id = req.params.id;
//         let record = await db.blogs.findByPk(id)
//         // res.json(record);
//         res.render('blog-post', {record})
//     }
//     catch (error) {
//         console.log(error)
//         res.json({})
//     }

//     // res.render('blog-post')
// })


// module.exports = router;




const express = require('express');
const router = express.Router();

router.get('/blog-post', (req,res) => {

   
    res.render('blog-post')
})


module.exports = router;