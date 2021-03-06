// Controllers are used for declaring all the endpoint
const AuthController = require('./controllers/AuthController')
const AuthControllerPolicy = require('./policies/AuthControllerPolicy')
const SongsController = require('./controllers/SongsController')
const BookmarksController = require('./controllers/BookmarksController')

module.exports = (app) => {
  app.post('/register',
    AuthControllerPolicy.register,
    AuthController.register)

  app.post('/login',
    AuthController.login)

  app.get('/songs',
    SongsController.index)
  app.get('/songs/:songId',
    SongsController.show)
  app.put('/songs/:songId',
    SongsController.put)
  app.post('/songs',
    SongsController.post)
  // Bookmarks
  app.get('/bookmarks',
    BookmarksController.index)
  app.post('/bookmaarks',
    BookmarksController.post)
  app.delete('/bookmaarks/:bookmarkIds',
    BookmarksController.delete)
}
