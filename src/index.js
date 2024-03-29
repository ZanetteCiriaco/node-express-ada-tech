require('dotenv').config();
const express = require('express');
const routes = require('./routes/index')

const app = express();

app.use(express.json());
app.use('/', routes)

app.listen(process.env.PORT, () => {
    console.log(`Server rodando na porta ${process.env.PORT}`)
})