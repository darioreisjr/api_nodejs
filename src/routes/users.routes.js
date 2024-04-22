const { Router } = require('express');

const UserController = require('../controllers/UsersController');

const usersRoutes = Router();

const usersController = new UserController();

usersRoutes.post('/', usersController.create);

usersRoutes.put('/:id', usersController.update);

module.exports = usersRoutes;