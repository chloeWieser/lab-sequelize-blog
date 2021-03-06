const express = require('express');
const app = express();
const helmet = require('helmet');
const port = 3000;

// const db = require('/models') //links to index 



app.use(express.static('public'));
app.use(helmet())
app.set('view engine', 'ejs');

//body parser
app.use(express.urlencoded({extended: false}))
app.use(express.json()) 

//routes 
app.use(require('./routes/index.js'))
app.use(require('./routes/blog-post.js'))
app.use(require('./routes/login.js'))
app.use(require('./routes/registration.js'))
app.use(require('./routes/admin.js'))
app.use(require('./routes/about.js'))

app.listen(port, () => {
    console.log(`listening on port ${port}`);
})