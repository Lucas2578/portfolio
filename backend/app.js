const express = require('express');
const mongoose = require('mongoose');
const skillsRoutes = require('./routes/Skill');
const projectsRoutes = require('./routes/Project');
const Projects = require('./models/Projects');

const user = process.env.DATABASE_USER;
const password = process.env.DATABASE_PASSWORD;
const cluster = process.env.DATABASE_CLUSTER;
const db_name = process.env.DATABASE_SERVER;

mongoose.connect(`mongodb+srv://${user}:${password}@${cluster}.${db_name}.mongodb.net/?retryWrites=true&w=majority`,
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => {
    console.log('Connexion à MongoDB réussie !');

    // Créer une liste de nouveaux projets
    // const newProjects = [
    //   { nameKey: 'booki', skillsRequire: ['html', 'css'], imagePreviewPaths: 'assets/images/projects/booki/booki_1.png', githubLink: 'https://github.com/Lucas2578/BookiP2', imagePaths: { screen1: 'assets/images/projects/booki/booki_2.png', screen2: 'assets/images/projects/booki/booki_3.png', screen3: 'assets/images/projects/booki/booki_4.png' } },
    //   { nameKey: 'ohmyfood', skillsRequire: ['html', 'sass'], imagePreviewPaths: 'assets/images/projects/ohmyfood/ohmyfood_1.png', githubLink: 'https://github.com/Lucas2578/Ohmyfood-', imagePaths: { screen1: 'assets/images/projects/ohmyfood/ohmyfood_2.png', screen2: 'assets/images/projects/ohmyfood/ohmyfood_3.png', screen3: 'assets/images/projects/ohmyfood/ohmyfood_4.png' } },
    //   { nameKey: 'sophiebluel', skillsRequire: ['javascript'], imagePreviewPaths: 'assets/images/projects/sophiebluel/sophiebluel_1.png', githubLink: 'https://github.com/Lucas2578/JavaScript-P3', imagePaths: { screen1: 'assets/images/projects/sophiebluel/sophiebluel_2.png', screen2: 'assets/images/projects/sophiebluel/sophiebluel_3.png', screen3: 'assets/images/projects/sophiebluel/sophiebluel_4.png' } },
    //   { nameKey: 'menumaker', skillsRequire: ['projectmanagement'], imagePreviewPaths: 'assets/images/projects/menumaker/menumaker_1.png', githubLink: 'https://github.com/Lucas2578/P4-OpenclassRoom', imagePaths: { screen1: 'assets/images/projects/menumaker/menumaker_2.png', screen2: 'assets/images/projects/menumaker/menumaker_3.png', screen3: 'assets/images/projects/menumaker/menumaker_4.png' } },
    //   { nameKey: 'ninacarducci', skillsRequire: ['html', 'css', 'javascript'], imagePreviewPaths: 'assets/images/projects/ninacarducci/ninacarducci_1.png', githubLink: 'https://github.com/Lucas2578/P5-OpenclassRooms', imagePaths: { screen1: 'assets/images/projects/ninacarducci/ninacarducci_2.png', screen2: 'assets/images/projects/ninacarducci/ninacarducci_3.png', screen3: 'assets/images/projects/ninacarducci/ninacarducci_4.png' } },
    //   { nameKey: 'kasa', skillsRequire: ['sass', 'javascript', 'react', 'nodejs'], imagePreviewPaths: 'assets/images/projects/kasa/kasa_1.png', githubLink: 'https://github.com/Lucas2578/P6-OpenclassRooms', imagePaths: { screen1: 'assets/images/projects/kasa/kasa_2.png', screen2: 'assets/images/projects/kasa/kasa_3.png', screen3: 'assets/images/projects/kasa/kasa_4.png' } },
    //   { nameKey: 'monvieuxgrimoire', skillsRequire: ['nodejs', 'express', 'mongodb'], imagePreviewPaths: 'assets/images/projects/monvieuxgrimoire/monvieuxgrimoire_1.png', githubLink: 'https://github.com/Lucas2578/P7-OpenclassRoom', imagePaths: { screen1: 'assets/images/projects/monvieuxgrimoire/monvieuxgrimoire_2.png', screen2: 'assets/images/projects/monvieuxgrimoire/monvieuxgrimoire_3.png', screen3: 'assets/images/projects/monvieuxgrimoire/monvieuxgrimoire_4.png' } },
    //   { nameKey: 'frenchsky', skillsRequire: ['projectmanagement', 'leadership', 'writing', 'yml'], imagePreviewPaths: 'assets/images/projects/frenchsky/frenchsky_1.png', imagePaths: { screen1: 'assets/images/projects/frenchsky/frenchsky_2.png', screen2: 'assets/images/projects/frenchsky/frenchsky_3.png', screen3: 'assets/images/projects/frenchsky/frenchsky_4.png' } },
    //   // Ajoutez autant de projets que nécessaire
    // ];

    // // Insérer plusieurs nouveaux projets dans la base de données
    // Projects.insertMany(newProjects)
    //   .then(projects => {
    //     console.log('Projets ajoutés avec succès :', projects);
    //   })
    //   .catch(error => {
    //     console.error('Erreur lors de l\'ajout des projets :', error);
    //   });
  })
  .catch(() => console.log('Connexion à MongoDB échouée !'));

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use('/api', skillsRoutes);
app.use('/api', projectsRoutes);

module.exports = app;