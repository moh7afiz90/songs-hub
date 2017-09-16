// Controllers are used for declaring all the endpoint
const AuthController = require('./controllers/AuthController')

module.exports = (app) => {
  app.post('/register',
    AuthController.register)
}
