//imports
const express = require('express');
const path = require('path');
const userGenerator = express.Router();

//external routes
const adminUsers = require('./admin');

userGenerator.get('/', (req, res, next) => {
    const new_user = adminUsers.user;
    res.render('accounts', {
        usersArray: new_user,
        page_title: 'accounts',
        path: 'display_user'
    })
})

module.exports = userGenerator;