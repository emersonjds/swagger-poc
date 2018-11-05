const express = require("express");
const endpoints = require('./endpoints');
const swaggerDocs = require('./swaggerDoc');

const app = express(express)
endpoints(app)
swaggerDocs(app)

app.use((err, req, res, next) => {
    console.error('There was an error', err);
});

app.listen(3000, () => console.log('App started'))

