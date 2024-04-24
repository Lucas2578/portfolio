const express = require('express');
const mongoose = require('mongoose');

const user = process.env.DATABASE_USER;
const password = process.env.DATABASE_PASSWORD;
const cluster = process.env.DATABASE_CLUSTER;
const db_name = process.env.DATABASE_SERVER;

mongoose.connect(`mongodb+srv://${user}:${password}@${cluster}.${db_name}.mongodb.net/?retryWrites=true&w=majority`,
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

module.exports = app;