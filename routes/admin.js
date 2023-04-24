//imports
const express = require('express');
const path = require('path');
const GenerateUsers = express.Router();

//creating empty array
const user = [];

//creating user routes
GenerateUsers.get('admin/addUsers', (req,res,next) => {
    res.render('createUser', {
        page_title: 'Add Users',
        path: 'listUsers'
    })
})

GenerateUsers.post('/addUsers', (req, res, next) => {
    user.push({ title: req.body.title });
    res.redirect('/')
})

//exporting this array and file for accessing them
exports.routes = GenerateUsers;
exports.user = user;