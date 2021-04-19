const mainContent = document.querySelector('#content');
const selectProject = document.querySelector('#mySelectProject');
const addProjectBtn = document.querySelector('#addProjectBtn');
const toDoBtn = document.querySelector('#toDoBtn');

const projectForm = document.querySelector('#myProjectForm');
const projectName = document.querySelector('#projectName');
const createProject = document.querySelector('#createProject');
const cancelProject = document.querySelector('#cancelProject');

const myTodoForm = document.querySelector('#myTodoForm');
const todoTitle = document.querySelector('#todoTitle');
const todoDescription = document.querySelector('#todoDescription');
const todoDueDate = document.querySelector('#todoDueDate');
const todoPriority = document.querySelector('#todoPriority');

const editTodo = document.querySelector('#editTodo');
const submitTodo = document.querySelector('#submitTodo');
const cancelTodo = document.querySelector('#cancelTodo');

const todoLists = document.createElement('div');
const todoListDetails = document.createElement('p');

todosContents = todoListDetails.innerHTML;

const domObjects=()=>{
    const showProjectForm =()=>{
        projectForm.style.display='block'

    }
    const hideProjectForm =()=>{
        projectForm.style.display='none'

    }
    const showTodoForm =()=>{
        myTodoForm.style.display='block'

    }
    const hideTodoForm =()=>{
        myTodoForm.style.display='none'

    }
}
