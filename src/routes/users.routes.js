const { Router } = require('express');
const multer = require('multer');
const uploadConfig = require('../configs/upload');

const UserController = require('../controllers/UsersController');
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const usersRoutes = Router();

const upload = multer(uploadConfig.MULTER);

const usersController = new UserController();

usersRoutes.post('/', usersController.create);
usersRoutes.put('/', ensureAuthenticated, usersController.update);
usersRoutes.patch('/avatar', ensureAuthenticated, upload.single('avatar'), (request, response) => {
  console.log(request.file.filename);
  return response.json();
});

module.exports = usersRoutes;