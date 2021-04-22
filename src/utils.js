import * as domEs from './domElements';

// Populate Select Project Drop Down
const selectOption = (projects) => {
  projects.forEach((project) => {
    const option = document.createElement('option');
    option.innerHTML = project.projectName;
    if (domEs.selectProject) {
      domEs.selectProject.appendChild(option);
    }
  });
};

// Set Priority Color
const priorityBg = (priority, todoDiv) => {
  if (priority === 'High') {
    todoDiv.classList.add('highPriority');
  } else if (priority === 'Low') {
    todoDiv.classList.add('lowPriority');
  }
};

export { selectOption, priorityBg };