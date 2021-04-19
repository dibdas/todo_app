import projectObject from './project';
import todoObject from './todo';
import  {mainContent,selectProject,addProjectBtn,toDoBtn,projectForm,projectName,createProject,cancelProject,
    myTodoForm,todoTitle,todoDescription,todoDueDate,todoPriority,editTodo,submitTodo,cancelTodo,todoLists,todoListDetails,domObjects} from './domObjects.js';

let  allProjects = [];
let currentProject = '';
let currentTodo = '';

const selectOption =()=>{
    allProjects.forEach((project)=>{
        const option = document.createElement('option');
        option.innerHTML=project.projectName;
        selectProject.appendChild(option);
    });
};

const currentProjects=(currentProject)=>{
    if(currentProject ==''){
        currentProject = selectProject.value;
    }

    allProjects.forEach((project)=>{
        if(project.projectName === currentProject){
            // domObjects.
            todoLists.innerHTML='';
            if(project.todoList.length>0){
                for(let i =0 ;i<project.todoList.length;i+=1){
                    const todoDiv = document.createElement('div');
                    // add priotrity here 
                    todoDiv.classList.add('tododiv');

                    let todoString = `Title: ${project.todoList[i].title}`;
                    todoString+= `Description :${project.todoList[i].description}`;
                    todoString+= `DueDate :${project.todoList[i].dueDate}`;
                    todoString+= `Priority  :${project.todoList[i].priority}`;
                    todoDiv.innerHTML= todoString;

                    const editBtn = document.createElement('button');
                    const deleteBtn = document.createElement('button');

                    editBtn.innerHTML= 'Edit';
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
            }
            else{
                todoListDetails.innerHTML='no todo list!';
            }
        }
    });
};




