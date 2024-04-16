const express = require('express');

const app = express();

app.post('/users', (request, response) => {
  const { page, limit } = request.query;
  response.send('Você chamou o POST')
})

const PORT = 3333;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});