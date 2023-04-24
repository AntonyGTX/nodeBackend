//imports
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

//internal routes
const admindata = require('./routes/admin');
const userAcounts = require('./routes/user');

const app = express();

//linking templates
app.set('view engine', 'ejs')
app.set('Views', 'Views');

app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'public')))
app.use('/admin', admindata.routes);
app.use(userAcounts);

app.use((req, res, next) => {
    res.status(404).render('404', {newTitle: '404 not found'})
})

app.listen(5000);
