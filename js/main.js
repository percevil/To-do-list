const todolist = document.querySelector('.todolist');
const taskList = todolist.querySelector('.todolist__tasks');

// Deleting tasks
todolist.addEventListener('click', event => {
  // add event listener
  if (!event.target.matches('.task__delete-button')) return;
  // if the event matches .task__delete-button the continue else
  // stop action

  // Deletes a task
  const taskElement = event.target.parentElement;
  // finds parent element
  taskList.removeChild(taskElement);
  // removes child (task)

  // Triggers empty state
  if (taskList.children.length === 0) {
    taskList.innerHTML = '';
  }
});

// Adding task to the list

todolist.addEventListener('submit', event => {
  event.preventDefault();

  // get value of the task input
  const newTaskField = todolist.querySelector('input');

  const inputValue = newTaskField.value.trim();
  // trims whitespace from field input

  // Add a new task
  const taskElement = document.createElement('li');
  taskElement.classList.add('task');
  // collects what the user has typed
  taskElement.innerHTML = `<input type="checkbox" id="task-1" />
  <label for="task-1"> ... </label>
  <span class="task__name">${inputValue}</span>
  <button type="button" class="task__delete-button">
    <svg viewBox="0 0 20 20"> ... </svg>
  </button>`;
  if (!inputValue) return;
  // Turns off the Listener so empty tasks cant be entered unless there is something in the input field.
  taskList.appendChild(taskElement);
  // appends child to th DOM , which makes the task visible
  newTaskField.value = '';
  // clears input field for another task , so user doesnt have to clear it manually
  newTaskField.focus();
  // Adds focus to input after user enters a new task (blinking cursor)

  // Sanitize innerHTML
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

  console.log(Math.random());

  const uniqueID = generateUniqueString(10);
  taskElement.classList.add('task');
  taskElement.innerHTML = DOMPurify.sanitize(`
  <input type="checkbox" id="${uniqueID}" />
  <label for="${uniqueID}"> <svg viewBox="0 0 20 15">
  <path d="M0 8l2-2 5 5L18 0l2 2L7 15z" fill-rule="nonzero" />
    </svg> </label>
  <span class="task__name">${inputValue}</span>
  <button type="button" class="task__delete-button">
  <svg viewBox="0 0 20 20">
  <path
    d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"/>
  </svg>
  </button>
  `);
});

//  API stuff

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
