const express = require('express');
const app = express();

app.use((req, res, next) =>{    //Sets up middleware
    res.status(200).json({      //Sends a response
        message: 'It works!'
    });
});

module.exports = app;