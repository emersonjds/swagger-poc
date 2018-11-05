const initializeEndpoints = (app) => {
    /**
     * @swagger: '2.0'
     * /users:
     *     get:
     *       description: Return all users
     */
    app.get('/users', (req, res) => {
        res.end('This should return all users')
    });

    app.get('/users/:id', (req, res) => {
        res.end(`This should return the user with ID ${req.parmas.id}`)
    });
}

module.exports = initializeEndpoints;