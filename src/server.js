'use strict';
const express = require('express');
const app = express();
const registerRoutes = require('./routes');
const path = require('path');

// server config
const port = process.env.PORT || 3000;

// serves static files
app.use(express.static(path.join(__dirname, "../public")));

// register routes
registerRoutes(app);

// create server start method
const start = () => {
    return new Promise((resolve, reject) => {
        // start the server
        app.listen(port, () => {
            console.log(`Connected to Port ${port}`);
            resolve()
        });
    }).catch((error) => {
        console.log(`failed to start server => ${error.message}`)
    });
}

module.exports = start;


