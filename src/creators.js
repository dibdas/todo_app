import todoObject from './todo';
import projectObject from './project';
import { saveProjects } from './storage'
import {selectProject, domObjects} from './domElements'
import { selectOption } from './utils'
import { allProjects, currentProject, displayCurrentProjects} from './index'


//  allProjects = []; 
//  currentProject = '';

const createProjectName = (project) => {
    const newProject = projectObject(project);
    allProjects.push(newProject);
    saveProjects(allProjects);
    domObjects.errorMsgsAlert('the project has been created successfully');
    selectProject.innerHTML = '';
    selectOption(allProjects);
    domObjects.hideProjectForm();
    currentProject = selectProject.value;
  };


const createTodoObject = (title, description, dueDate, priority) => {
    // let projects
    if (currentProject == '') {
      createProjectName('Default Project');
    }
  
    const newTodo = todoObject(title, description, dueDate, priority);
    
    allProjects.forEach((project) => {
      if (project.projectName === currentProject) {
        project.todoList.push(newTodo);
        saveProjects(allProjects);
        displayCurrentProjects();
        domObjects.hideTodoForm();
      }
    });
  };

  export { createProjectName, createTodoObject}
  