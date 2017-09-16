// Controllers are used for declaring all the endpoint
const AuthController = require('./controllers/AuthController')
const AuthControllerPolicy = require('./policies/AuthControllerPolicy')

module.exports = (app) => {
  app.post('/register',
    AuthController.register,
    AuthControllerPolicy.register)
}
