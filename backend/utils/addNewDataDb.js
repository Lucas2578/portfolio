const mongoose = require('mongoose');
const Projects = require('./models/Projects');
const SkillsOther = require('./models/SkillsOther');
const SkillsWeb = require('./models/SkillsWeb');

const user = process.env.DATABASE_USER;
const password = process.env.DATABASE_PASSWORD;
const cluster = process.env.DATABASE_CLUSTER;
const db_name = process.env.DATABASE_SERVER;

mongoose.connect(`mongodb+srv://${user}:${password}@${cluster}.${db_name}.mongodb.net/?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true })
    .then(async () => {
        console.log('Connexion à MongoDB réussie !');

    try {
        // // New projects
        // const newProjects = [
        //     { nameKey: 'booki', skillsRequire: ['html', 'css'], imagePreviewPaths: 'assets/images/projects/booki/booki_1.png', githubLink: 'https://github.com/Lucas2578/BookiP2', imagePaths: { screen1: 'assets/images/projects/booki/booki_2.png', screen2: 'assets/images/projects/booki/booki_3.png', screen3: 'assets/images/projects/booki/booki_4.png' } },
        // ];
        // // Insert new projects
        // const insertedProjects = await Projects.insertMany(newProjects);
        // console.log('Projets ajoutés avec succès :', insertedProjects);

        // // New web skills
        // const newSkillsWeb = [
        //     { nameKey: 'html', icon: 'fa-brands fa-html5', level: '4', },
        // ];
        // // Insert new webskills
        // const insertedSkillsWeb = await SkillsWeb.insertMany(newSkillsWeb);
        // console.log('Projets ajoutés avec succès :', insertedSkillsWeb);

        // // New other skills
        // const newSkillsOther = [
        //     { nameKey: 'writing', icon: 'fa-solid fa-pen', level: '4', },
        // ];
        // // Insert new other skills
        // const insertedSkillsOther = await SkillsOther.insertMany(newSkillsOther);
        // console.log('Projets ajoutés avec succès :', insertedSkillsOther);
    } catch (error) {
    console.error('Erreur lors de l\'ajout des projets :', error);
    } finally {
    // Déconnecter Mongoose une fois l'opération terminée
    mongoose.disconnect();
    }
})
.catch(() => console.log('Connexion à MongoDB échouée !'));

    //////////////////// TEMPORAIRE ////////////////////
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