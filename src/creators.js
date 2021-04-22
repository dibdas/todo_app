
const createTodoObject = (title, description, dueDate, priority) => {
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

  export { createTodoObject}
  