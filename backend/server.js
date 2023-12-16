const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const authRoutes = require('./routes/authRoutes');
const storyRoutes = require('./routes/storyRoutes');

async function configureServer() {
    console.log("Entering configuration");
    const server = express();
    server.use(cors());
    server.use(bodyParser.urlencoded({ extended: true }));
    server.use(bodyParser.json());

    server.use('/auth', authRoutes);
    server.use('/book', storyRoutes);

    server.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
        next();
    });

    server.listen(3000, function() {
        console.log("Listening to port 3000");
    });
    console.log("Exiting configuration.");
    return server;

    
}



exports.configureServer = configureServer;