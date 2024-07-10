const express = require('express')
const app = express()

const path = require('path')

const rootDir = require('./utils/path.js')
const adminRoutes = require('./routes_/admin.js')
const shopRoutes = require('./routes_/shop.js')

app.use(express.urlencoded({ extended: true }));

app.use(shopRoutes)

app.use('/admin', adminRoutes)

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(rootDir, 'views', '404.html'))
})

app.listen(3000)
