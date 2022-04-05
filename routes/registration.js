
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const db = require("../models")

router.get('/registration', (req,res) => {

   
    res.render('registration')
})



router.post('/registration', async (req, res) => {
    //collect requested data and store it in our db
    try {
        //scraping info from header and storing it as a variable inside of our javascript- at this point make sure you have the body parser lines in app.js above the routes
        let { firstName, lastName, email, password } = req.body;

        //password encrypt & npm install bcrypt js & require it in the variaples at top of page, allows us to hash and salt our passwords at the same time! then do this:
        password = bcrypt.hashSync(password, 8);

        //asume that all users are basic levels- we will manually change it for the few admins

        //check database to see if email already exists:
        let emailCheck = await db.users.findAll({ where: { email: email } })
        if (emailCheck) {    //removed   .length > 0
            res.render('registration', {
                error: ' email already exists, please log in or use another email addres'
            })
        } else {
            let insertRecord = await db.users.create({
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password,
                userID: 2
            })
            res.redirect('/login')
        }
    }
    catch (error) {  //ERROR
        console.log(error)
        res.render('/registration',{
            error: "error: can't use these credentials"
            })
    }
    })




module.exports = router;
