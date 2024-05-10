// Datas from "projects" table in db
export const fetchProjects = () => {
    return fetch('http://localhost:4000/api/project').then(response => {
        if (!response.ok) {
            throw new Error('Erreur lors de la récupération des projets');
        }
        return response.json();
    }).catch(error => {
        console.error('Error fetching projects:', error);
    });
};

// Datas from "webskills" table in db
export const fetchWebSkills = () => {
    return fetch('http://localhost:4000/api/skillwebs').then(response => {
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
    return fetch('http://localhost:4000/api/skillothers').then(response => {
        if (!response.ok) {
            throw new Error('Erreur lors de la récupération des autres compétences');
        }
        return response.json();
    }).catch(error => {
        console.error('Error fetching other skills:', error);
    });
};