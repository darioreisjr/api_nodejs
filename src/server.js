const express = require('express');

const app = express();

app.get('/message/:id/:user', (request, response) => {
  const { id, user } = request.params;

  response.send(`
    Mensagem ID: ${id}.
    Usuário: ${user}.
    `);
});

app.get('/users', (request, response) => {
  const { page, limit } = request.query;
  response.send(`
    Página: ${page}.
    Mostrar: ${limit}.
    `);
})

const PORT = 3333;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});