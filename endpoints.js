const initializeEndpoints = (app) => {
    app.get('/users', (req, res) => {
        res.end('This should return all users')
    });

    app.get('/users/:id', (req, res) => {
        res.end(`This should return the user with ID ${req.parmas.id}`)
    });
}

module.exports = initializeEndpoints;