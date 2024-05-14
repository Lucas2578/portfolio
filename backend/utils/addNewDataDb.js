const mongoose = require('mongoose');
const Projects = require('../models/Projects')
const SkillsOther = require('../models/SkillsOther');
const SkillsWeb = require('../models/SkillsWeb');

const user = process.env.DATABASE_USER;
const password = process.env.DATABASE_PASSWORD;
const cluster = process.env.DATABASE_CLUSTER;
const db_name = process.env.DATABASE_SERVER;

mongoose.connect(`mongodb+srv://Lucluc:U9dzc2LiJIeLfhak@$Claude.hohlwcd.mongodb.net/?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true })
    .then(async () => {
        console.log('Connexion à MongoDB réussie !');

    try {
        // // New projects
        // const newProjects = [
        //   { nameKey: 'booki', skillsRequire: ['html', 'css'], imagePreviewPaths: 'assets/images/projects/booki/booki_1.webp', githubLink: 'https://github.com/Lucas2578/BookiP2', imagePaths: { screen1: 'assets/images/projects/booki/booki_2.webp', screen2: 'assets/images/projects/booki/booki_3.webp', screen3: 'assets/images/projects/booki/booki_4.webp' } },
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