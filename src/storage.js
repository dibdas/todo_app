const saveProjects = (projects) => {
    const str = JSON.stringify(projects);
    localStorage.setItem('allProjects', str); // eslint-disable-line
};

const getProjects = () => {
    let projects;
    const str = localStorage.getItem('allProjects'); // eslint-disable-line
    projects = JSON.parse(str);
    if (!projects) {
        projects = [];
    }
    return projects
};

export { saveProjects, getProjects }