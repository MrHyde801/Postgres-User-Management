const express = require('express')
const app = express()
const fs = require('fs')
const bodyParser = require('body-parser');
const path = require('path')
const e = require('express');

const {Pool, Client} = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'Users',
    password: 'postgres',
    port: 5432,
})


//View users
exports.view = (req,res) => {
    pool.query('SELECT * FROM usermanagers', (err, doc)=> {
    if(err) {
        throw err
    } else {
        res.render('home', {rows: doc.rows})
    }
    })
}

//search users
exports.find = (req,res)=> {
    let searchTerm = req.body.search
    pool.query()
}

//add user page is generated
exports.form = (req,res)=> {
    // res.render('add-user')
}

//add user
exports.create = (req,res) => {

}


//Edit User
exports.edit = (req,res)=> {

}

//Save User
exports.update = (req,res)=> {

}

exports.delete = (req,res)=> {

}






