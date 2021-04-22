import { createProjectName, createTodoObject } from '../src/creators'
import { domObjects } from '../src/domElements'

global.localStorage = {}
domObjects.errorMsgsAlert = () => { }
domObjects.hideProjectForm = () => { }
domObjects.showTodoForm = () => { }


let projectArrays = 'project1'

describe('createProjectName', () => {
    it('Create Project Name', () => {
        createProjectName(projectArrays, [])
        console.log(localStorage.allProjects);
        const array = JSON.parse(localStorage.allProjects).filter((project) => project.projectName === 'project1');
        expect(array.length).toBe(1);
    })
})