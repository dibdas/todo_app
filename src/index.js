/* eslint-disable eqeqeq */
import projectObject from './project';
import todoObject from './todo';
import {
  mainContent,
  selectProject,
  addProjectBtn,
  toDoBtn,
  projectForm,// eslint-disable-line 
  projectName,
  createProject,
  cancelProject,
  myTodoForm, // eslint-disable-line
  todoTitle,
  todoDescription,
  todoDueDate,
  todoPriority,
  editTodo,
  submitTodo,
  cancelTodo,
  todoLists,
  todoListDetails,
  domObjects,
} from './domElements';

let allProjects = [];
let currentProject = '';
let currentTodo = '';

const selectOption = () => {
  allProjects.forEach((project) => {
    const option = document.createElement('option');
    option.innerHTML = project.projectName;
    selectProject.appendChild(option);
  });
};

const priorityBg = (priority, todoDiv) => {
  if (priority === 'High') {
    todoDiv.classList.add('highPriority');
  } else if (priority === 'Low') {
    todoDiv.classList.add('lowPriority');
  }
};

const displayCurrentProjects = (currentProject) => { // eslint-disable-line
  if (currentProject == '') {
    currentProject = selectProject.value; // eslint-disable-line
  }

  allProjects.forEach((project) => {
    if (project.projectName === currentProject) {
      domObjects.removeMsg();
      todoLists.innerHTML = '';
      if (project.todoList.length > 0) {
        for (let i = 0; i < project.todoList.length; i += 1) {
          const todoDiv = document.createElement('div');
          priorityBg(project.todoList[i].priority, todoDiv);
          todoDiv.classList.add('todoDiv');

          let todoString = `Title: ${project.todoList[i].title} </br>`;
          todoString += `Description :${project.todoList[i].description} </br>`;
          todoString += `DueDate :${project.todoList[i].dueDate} </br>`;
          todoString += `Priority  :${project.todoList[i].priority} </br>`;
          todoDiv.innerHTML = todoString;

          const editBtn = document.createElement('button');
          const deleteBtn = document.createElement('button');

          editBtn.innerHTML = 'Edit';
          deleteBtn.innerHTML = 'Delete';
          editBtn.classList.add('editBtn');
          deleteBtn.classList.add('deleteBtn');
          editBtn.value = i;
          deleteBtn.value = i;
          todoDiv.appendChild(editBtn);
          todoDiv.appendChild(deleteBtn);
          todoLists.appendChild(todoDiv);
          mainContent.appendChild(todoLists);
        }
      } else {
        todoListDetails.innerHTML = 'no todo list!';
      }
    }
  });
};

const saveProjects = () => {
  const str = JSON.stringify(allProjects);
  localStorage.setItem('allProjects', str); // eslint-disable-line
};

const getProjects = () => {
  const str = localStorage.getItem('allProjects'); // eslint-disable-line
  allProjects = JSON.parse(str);
  if (!allProjects) {
    allProjects = [];
  }
};

const initialLoad = () => {
  getProjects();
  selectOption();
  displayCurrentProjects(currentProject);
};

const createProjectName = (project) => {
  const newProject = projectObject(project);
  allProjects.push(newProject);
  saveProjects();
  domObjects.errorMsgsAlert('the project has been created successfully');
  selectProject.innerHTML = '';
  selectOption();
  domObjects.hideProjectForm();
  currentProject = selectProject.value;
};

const createTodoObject = (title, description, dueDate, priority) => {
  if (currentProject == '') {
    createProjectName('Default Project');
  }

  const newTodo = todoObject(title, description, dueDate, priority);
  allProjects.forEach((project) => {
    if (project.projectName === currentProject) {
      project.todoList.push(newTodo);
      saveProjects();
      displayCurrentProjects();
      domObjects.hideTodoForm();
    }
  });
};

const validateProjectInput = (event) => {
  event.preventDefault();
  if (projectName.value === '') {
    domObjects.errorMsgsAlert('Project Name can not be empty');
  } else {
    createProjectName(projectName.value);
  }
};

const validateTodoInput = (event) => {
  event.preventDefault();
  if (todoTitle.value === '') {
    domObjects.errorMsgsAlert('Title can not be empty');
  } else {
    createTodoObject(todoTitle.value, todoDescription.value, todoDueDate.value, todoPriority.value);
  }
};

const deleteTodo = (target) => {
  allProjects.forEach((proj) => {
    if (proj.projectName === currentProject) {
      proj.todoList.splice(target.value, 1);
      saveProjects();
      displayCurrentProjects(currentProject);
    }
  });
};

const showEditTodoForm = (target) => {
  domObjects.showTodoForm();
  domObjects.hideSubmitTodo();
  allProjects.forEach((proj) => {
    if (proj.projectName === currentProject) {
      const temp = proj.todoList[target.value];
      todoTitle.value = temp.title;
      todoDescription.value = temp.description;
      todoDueDate.value = temp.dueDate;
      todoPriority.value = temp.priority;
      currentTodo = target.value;
    }
  });
};

const editTodoObject = () => {
  domObjects.showSubmitTodo();
  domObjects.hideTodoForm();
  allProjects.forEach((proj) => {
    if (proj.projectName === currentProject) {
      const editedTodo = todoObject(todoTitle.value, todoDescription.value, todoDueDate.value, todoPriority.value); // eslint-disable-line 
      proj.todoList[currentTodo] = editedTodo;// eslint-disable-line 
      const objIndex = allProjects.findIndex(((obj) => obj.projectName == currentProject));
      allProjects[objIndex] = proj;
      saveProjects();
      displayCurrentProjects(currentProject);
    }
  });
};

const btnListner = (targetBtn) => {
  if (targetBtn.classList == 'editBtn') {
    showEditTodoForm(targetBtn);
  } else if (targetBtn.classList == 'deleteBtn') {
    deleteTodo(targetBtn);
  }
};

initialLoad();

addProjectBtn.onclick = () => {
  domObjects.showProjectForm();
};

toDoBtn.onclick = () => {
  domObjects.showTodoForm();
};

createProject.onclick = (event) => {
  validateProjectInput(event);
};

submitTodo.onclick = (event) => {
  validateTodoInput(event);
};

cancelProject.onclick = (event) => {
  event.preventDefault();
  domObjects.hideProjectForm();
};

//
cancelTodo.onclick = (ev) => {
  ev.preventDefault();
  domObjects.hideTodoForm();
  domObjects.showSubmitTodo();
};

editTodo.onclick = (ev) => {
  ev.preventDefault();
  editTodoObject();
};

todoLists.addEventListener('click', (e) => {
  btnListner(e.target);
});

selectProject.onchange = () => {
  currentProject = selectProject.value;
  displayCurrentProjects(currentProject);
};
