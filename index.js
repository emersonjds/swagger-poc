const express = require("express");
const endpoints = require('./endpoints');

const app = express(express)
endpoints(app)

app.use((err, req, res, next) => {
    console.error('There was an error', err);
});

app.listen(3000, () => console.log('App started'))

