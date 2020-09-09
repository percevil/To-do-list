const todolist = document.querySelector('.todolist');
const taskList = todolist.querySelector('.todolist__tasks');
// removing task form list

//
todolist.addEventListener('click', event => {
  // addd event listener
  if (!event.target.matches('.task__delete-button')) return;
  // if the event matches .task__delete-button the continue else
  // stop action

  // Deletes a task
  const taskElement = event.target.parentElement;
  // finds parent element
  taskList.removeChild(taskElement);
  // removes child

  // Triggers empty state
  if (taskList.children.length === 0) {
    taskList.innerHTML = '';
  }
});

// Adding task to the list

todolist.addEventListener('submit', event => {
  event.preventDefault();

  // get value of the task
  const newTaskField = todolist.querySelector('input');
  
  const inputValue = newTaskField.value.trim();
  // trims whitespace from field input
  
  // Add a new task
  const taskElement = document.createElement('li');
  taskElement.classList.add('task');
  taskElement.innerHTML = `<input type="checkbox" id="task-1" />
  <label for="task-1"> ... </label>
  <span class="task__name">${inputValue}</span>
  <button type="button" class="task__delete-button">
    <svg viewBox="0 0 20 20"> ... </svg>
  </button>`;
  taskList.appendChild(taskElement);
  newTaskField.value = '';
  

  // Sanitize the innerHTML
  taskElement.innerHTML = DOMPurify.sanitize(`
<input type="checkbox" id="task" />
<label for="task"> ... </label>
<span class="task__name">${inputValue}</span>
<button type="button" class="task__delete-button">
  <svg viewBox="0 0 20 20"> ... </svg>
</button>
`);

  // Generating Unique Id's for each task
  const generateUniqueString = length =>
    Math.random()
      .toString(36)
      .substring(2, 2 + length);

  const uniqueID = generateUniqueString(10);
  taskElement.classList.add('task');
  taskElement.innerHTML = DOMPurify.sanitize(`
  <input type="checkbox" id="${uniqueID}" />
  <label for="${uniqueID}"> ... </label>
  <span class="task__name">${inputValue}</span>
  <button type="button" class="task__delete-button">
    <svg viewBox="0 0 20 20"> ... </svg>
  </button>
  `);

  
});

// const rootendpoint = 'https://api.learnjavascript.today';

// zlFetch
//   .post(`${rootendpoint}/users`, {
//     body: {
//       username: 'percevil',
//       password: 'ilikeseggs1828',
//     },
//   })
//   .then(response => console.log(response.body))
//   .catch(error => console.log(error));
