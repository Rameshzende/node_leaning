const path = require('path')
const express = require('express')
const router = express.Router()
const rootDir= require('../utils/path.js')
// Admin Add product => GET
router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'))
})

// Admin Add Product => POST
router.post('/add-product', (req, res, next) => {
    res.redirect('/')
})

module.exports = router