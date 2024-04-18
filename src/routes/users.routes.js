const { Router } = require('express');

const UserController = require('../controllers/UsersController');

const usersRoutes = Router();

function myMidddleware(request, response, next) {
  console.log('Você passou pelo midddleware');

  if(!request.body.isAdmin){
    return response.json({ message: 'User is not admin' });
  }

  next(); // para a execução do middleware em seguida
}






const usersController = new UserController();

usersRoutes.post('/', myMidddleware, usersController.create);

module.exports = usersRoutes;