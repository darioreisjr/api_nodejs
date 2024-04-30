const knex = require('../database/knex');
const AppError = require('../utils/AppError');

class SessionController {
  async create(request, response) {
    const { email, password } = request.body;

    const user = await knex('users').where({ email }).first();

    if (!user) {
      throw new AppError('E-mail e/ou senha inválidos', 401);
    }

    return response.json(user);
  }
}

module.exports = SessionController;