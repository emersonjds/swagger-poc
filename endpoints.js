const initializeEndpoints = (app) => {
  /**
   * @swagger
   * /users:
   *  get:
   *    description: This should return all users
   */
  app.get('/users', (req, res) => {
    res.end('This sould return all users');
  })

  /**
   * @swagger
   * /users/{id}:
   *  get:
   *    description: This should return all users
   */
  app.get('/users/:id', (req, res) => {
    res.end(`This should return the user with ID ${req.params.id}`)
  });
}

module.exports = initializeEndpoints;