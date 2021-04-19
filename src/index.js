import projectObject from './project'
import todoObject from './todo'
import  {mainContent,selectProject,addProjectBtn,toDoBtn,projectForm,projectName,createProject,cancelProject,
    myTodoForm,todoTitle,todoDescription,todoDueDate,todoPriority,editTodo,submitTodo,cancelTodo} from './domObjects.js'

let  allprojects = []
let currentProject = ''
let currentTodo = ''

const selectOption =()=>{
    allprojects.forEach((project)=>{
        const option = document.createElement('option')
        option.innerHTML=project.projectName
        selectProject.appendChild(option)
    })
}


