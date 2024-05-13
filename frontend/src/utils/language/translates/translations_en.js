const enTranslations = {
    nav_component: {
        menu: {
            home: "",
            skills: "",
            contact: "",
            cv: "",
            webdev: "",
            other: "",
        }
    },
    home_page: {
        about_me: {
            title: "Dunis Lucas, {age} years old.",
            desc: "FullStack WEB Developer",
            desc_body: "Present in the IT world through several projects, I have been able to acquire experience in project management with the help of personal projects, as well as key skills in the world of entrepreneurship. Equipped with essential skills for the web development world, passionate about innovative projects related to IT, I am never without learning!",    
        }
    },
    skills_page: {
        skills_title: {
            web: "Web technologies skills",
            other: "Others skills",
        },
        skills: {
            web: {
                javascript: "JavaScript",
                mongodb: "MongoDB",
                nodejs: "Node.js",
                react: "React",
                sass: "SASS",
                css: "CSS3",
                html: "HTML5",
            },
            other: {
                leadership: "Leadership",
                projectmanagement: "Proj. Mgmt",
                writing: "Writing",
                yml: "YML",
                github: "GitHub",
            },
            level_name: {
                1: "Fundamental",
                2: "Basic",
                3: "Intermediate",
                4: "Advanced",
                5: "Expert",
            }
        }
    },
    projects_page: {
        projects: {
            nameKey: {
                booki: "Booki",
                ohmyfood: "OhMyFood!",
                sophiebluel: "Portfolio Sophie Bluel",
                ninacarducci: "SEO & Debug Nina Carducci",
                menumaker: "Menu Maker Scheduling",
                kasa: "Kasa",
                monvieuxgrimoire: "Back-end Mon Vieux Grimoire",
                frenchsky: "Administrator Minecraft \"FrenchSky\"",
            },
            skillsRequire: {
                javascript: "JavaScript",
                mongodb: "MongoDB",
                nodejs: "Node.js",
                react: "React",
                sass: "SASS",
                css: "CSS3",
                html: "HTML5",
                leadership: "Leadership",
                projectmanagement: "Proj. Mgmt",
                writing: "Writing",
                yml: "YML",
                github: "GitHub",
            },
            description: {
                booki: "a",
                ohmyfood: "b!",
                sophiebluel: "c",
                kasa: "d",
                monvieuxgrimoire: "e",
                frenchsky: "f",
            }
        }
    },
    project_page: {
        project: {
            booki: {
                title: {
                    screen1: "HTML & CSS Project",
                    screen2: "A completely responsive website",
                    screen3: "Very simple animations",
                },
                legend: {
                    screen1: "Developed solely with HTML5 and CSS3.",
                    screen2: "Developed with Desktop first approach, this website is fully responsive (PC, tablet, and mobile).",
                    screen3: "Simple animations on certain elements hover.",
                },
                desc: {
                    title: "Booki | Completed in 2022",
                    content: "Booki is a project completed during my web developer training. I gained an understanding of semantics as well as the basics of HTML and CSS languages. This site consisted of only one page to train in these technologies.",
                }
            },
            ohmyfood: {
                title: {
                    screen1: "Multiple CSS animations",
                    screen2: "A completely responsive website",
                    screen3: "Multiple pages containing menus",
                },
                legend: {
                    screen1: "Page loading animation upon opening.",
                    screen2: "Developed with Mobile first approach, this website is fully responsive (PC, tablet, and mobile).",
                    screen3: "Each restaurant opens a new page containing the restaurant menus.",
                },
                desc: {
                    title: "OhMyFood! | Completed in 2023",
                    content: "OhMyFood is a project completed during my web developer training. This project mainly allowed me to acquire SASS skills and improve my HTML and CSS languages. This project was also done with Mobile First approach, a first for me.",
                }
            },
            sophiebluel: {
                title: {
                    screen1: "Mainly JavaScript Project",
                    screen2: "Login system",
                    screen3: "Modal to add images",
                },
                legend: {
                    screen1: "Dynamic image display with JavaScript.",
                    screen2: "Creation of an Administrator login system.",
                    screen3: "Dynamic addition of images using a modal if the user has the required permissions.",
                },
                desc: {
                    title: "Sophie Bluel Portfolio | Completed in 2024",
                    content: "This is a project completed during my web developer training. The HTML and CSS code was provided, as was the backend. My mission was to add a login system, dynamically display images present in the backend, and be able to add new images via a modal if the user has the required permissions. I was thus able to understand the basic elements of the JavaScript language.",
                }
            },
            menumaker: {
                title: {
                    screen1: "Technological watch",
                    screen2: "Project management",
                    screen3: "Estimation of realization time",
                },
                legend: {
                    screen1: "Documentation of the technologies used.",
                    screen2: "Planning the project progress over the weeks.",
                    screen3: "Use of Trello and Story Points to distribute tasks and estimate realization time.",
                },
                desc: {
                    title: "Menu Maker by Qwenta | Completed in 2024",
                    content: "Menu Maker is a project completed during my web developer training. Here, the goal was to learn the concepts of the entrepreneurial world. Story Points, project management, planning, technological watch are the skills I learned with this project.",
                }
            },
            ninacarducci: {
                title: {
                    screen1: "Google LightHouse Audit",
                    screen2: "Before/After LightHouse score comparison",
                    screen3: "Before/After Wave comparison",
                },
                legend: {
                    screen1: "Google LightHouse audit of the site once the modifications were made.",
                    screen2: "Considerable improvement in the LightHouse score.",
                    screen3: "Correction of all errors and bugs.",
                },
                desc: {
                    title: "Nina Carducci Portfolio | Completed in 2024",
                    content: "The correction of errors and the improvement of the SEO of Nina Carducci's Portfolio was completed during my web developer training. I was able to acquire the necessary skills to improve the SEO of a site, define SEO terms, accessibility and best practices. Google Rich snippet and Wave are now tools that I master thanks to this project.",
                }
            },
            kasa: {
                title: {
                    screen1: "React Project",
                    screen2: "Dynamic display",
                    screen3: "Use of various components",
                },
                legend: {
                    screen1: "My first React project, done from scratch.",
                    screen2: "All data is dynamically displayed from a .json file.",
                    screen3: "Creation of reusable components in several places (collapses).",
                },
                desc: {
                    title: "Kasa | Completed in 2024",
                    content: "Kasa is a project completed during my web developer training. I learned to realize this project as a Single Page Application (SPA) with React. I had to initialize a new React application, create reusable components with modular code to make the application dynamic.",
                }
            },
            monvieuxgrimoire: {
                title: {
                    screen1: "Secure registration and login page",
                    screen2: "Adding new books to database",
                    screen3: "Book details",
                },
                legend: {
                    screen1: "Option to register securely with password encryption and addition of login information to the database.",
                    screen2: "Adding books to the database with image management (resizing, deletion, saving, optimization).",
                    screen3: "Calculating an average rating with all the ratings present in the database, possible book modification if the user is the author, and sorting of the three best rated books.",
                },
                desc: {
                    title: "My Old Grimoire | Completed in 2024",
                    content: "My Old Grimoire is a project completed during my web developer training. I was able to deepen my knowledge in JavaScript, and learn to use Node.js and Express. MongoDB Atlas was also used for the database. The front-end was completely provided, while the back-end was completely done by me.",
                }
            },
            frenchsky: {
                title: {
                    screen1: "Project management",
                    screen2: "Writing",
                    screen3: "Leadership",
                },
                legend: {
                    screen1: "Communication management and planning of project progress.",
                    screen2: "Writing a Wikipedia of server-related information, specifications, and graphic charter.",
                    screen3: "Recruitment of personnel, planning of weekly meetings and team management.",
                },
                desc: {
                    title: "FrenchSky Administrator | 2022 to 2024",
                    content: "FrenchSky is a Minecraft game server open since 2016. I joined as a simple player, then climbed the ranks to Administrator. I was tasked with creating a new version from scratch, recruiting a moderation team and managers for different departments (animation, moderation). Configuring YML files to add content to the server was also one of my main tasks, in addition to having also organized numerous in-game events. I also wrote many development specifications (for Java plugins), as well as daily announcements to players.",
                }
            },
            modal: {
                clickhere: "Access to Github project"
            }
        }
    }
};

export default enTranslations;