import { BACK_BASE_URL } from "./config";

// Datas from "projects" table in db
export const fetchProjects = () => {
    return fetch(`${BACK_BASE_URL}/api/project`).then(response => {
        if (!response.ok) {
            throw new Error('Erreur lors de la récupération des projets');
        }
        return response.json();
    }).catch(error => {
        console.error('Error fetching projects:', error);
    });
};

// Datas from "projects" table in db for THIS project
export const fetchProject = (projectNameKey) => {
    return fetch(`${BACK_BASE_URL}/api/project/${projectNameKey}`).then(response => {
        if (!response.ok) {
            throw new Error('Erreur lors de la récupération du projet');
        }
        return response.json();
    }).catch(error => {
        console.error('Error fetching projects:', error);
    });
};

// Datas from "webskills" table in db
export const fetchWebSkills = () => {
    return fetch(`${BACK_BASE_URL}/api/skillwebs`).then(response => {
        if (!response.ok) {
            throw new Error('Erreur lors de la récupération des compétences web');
        }
        return response.json();
    }).catch(error => {
        console.error('Error fetching web skills:', error);
    });
};

// Datas from "otherskills" table in db
export const fetchOtherSkills = () => {
    return fetch(`${BACK_BASE_URL}/api/skillothers`).then(response => {
        if (!response.ok) {
            throw new Error('Erreur lors de la récupération des autres compétences');
        }
        return response.json();
    }).catch(error => {
        console.error('Error fetching other skills:', error);
    });
};