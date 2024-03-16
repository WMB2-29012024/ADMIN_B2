const inputElem = document.getElementById('form-input');
const btnElem = document.getElementById('form-btn');
const listElem = document.getElementById('items-list');
const formElem = document.getElementsByTagName('form')[0];
const searchInput = document.getElementById('search-box');
const allTodoBtn = document.getElementById('all-todo-btn');
const activeTodoBtn = document.getElementById('active-todo-btn');
const completedTodoBtn = document.getElementById('completed-todo-btn');

const todoList = [];
const ACTIVE_TODO = 'ACTIVE';
const ALL_TODO = 'ALL';
const COMPLETED_TODO = 'COMPLETED';
const EDIT_BTN_TEXT = 'Edit';
const SUBMIT_BTN_TEXT = 'Submit';
let editTodoIndex;

inputElem.addEventListener('change', (e) => {
  inputElem.setAttribute('value', e.target.value);
});

const handleCheckbox = (todoId) => {
  const todoIndex = todoList.findIndex((todo) => todo.id === todoId);
  const currentTodo = todoList[todoIndex];
  currentTodo.completed = !currentTodo.completed;
  renderTodos(todoList);
};

const deleteTodo = (todoId) => {
  // Find index to delete todo
  const todoIndex = todoList.findIndex((todo) => todo.id === todoId);

  // Delete todo using index
  todoList.splice(todoIndex, 1);

  // Show update todolist
  renderTodos(todoList);
};

const editTodo = (todoId) => {
  const todoIndex = todoList.findIndex((todo) => todo.id === todoId);
  editTodoIndex = todoIndex;
  inputElem.value = todoList[todoIndex].text;
  btnElem.innerText = EDIT_BTN_TEXT;
};

const renderTodos = (todoListArray) => {
  listElem.innerHTML = '';

  todoListArray.forEach((todo, index) => {
    const liElem = document.createElement('li');
    const checkboxElem = document.createElement('input');
    const labelElem = document.createElement('label');
    const deleteBtn = document.createElement('button');
    const editBtn = document.createElement('button');

    deleteBtn.innerText = 'Delete';
    editBtn.innerText = 'Edit';
    checkboxElem.type = 'checkbox';
    checkboxElem.addEventListener('change', () => handleCheckbox(todo.id));
    deleteBtn.addEventListener('click', () => deleteTodo(todo.id));
    editBtn.addEventListener('click', () => editTodo(todo.id));
    checkboxElem.checked = todo.completed;
    labelElem.innerText = todo.text;

    liElem.appendChild(checkboxElem);
    liElem.appendChild(labelElem);
    liElem.appendChild(editBtn);
    liElem.appendChild(deleteBtn);
    listElem.appendChild(liElem);
  });
};

formElem.addEventListener('submit', (e) => {
  e.preventDefault();

//   If input is blank then don't add todo
  if (inputElem.value === '') {
    return;
  }

  if (btnElem.innerText === EDIT_BTN_TEXT) {
    todoList[editTodoIndex].text = inputElem.value;
    renderTodos(todoList);
    btnElem.innerText = SUBMIT_BTN_TEXT;
    inputElem.value = '';
  } else {
    // Add new user input todo in todos array
    todoList.push({
      id: Date.now(),
      text: inputElem.value,
      completed: false,
    });

    renderTodos(todoList);

    // Clear the input value
    inputElem.value = '';
  }
});

searchInput.addEventListener('keyup', () => {
  const searchInputValue = searchInput.value;
  const filterData = [];

  for (let i = 0; i < todoList.length; i++) {
    const currentTodo = todoList[i];

    if (currentTodo.text.includes(searchInputValue)) {
      filterData.push(currentTodo);
    }
  }

  renderTodos(filterData);

  console.log(filterData);
});

const filterTodos = (filterType) => {
  if (filterType === ACTIVE_TODO) {
    const filterAllTodos = todoList.filter((todo) => todo.completed === false);
    renderTodos(filterAllTodos);
  } else if (filterType === COMPLETED_TODO) {
    const filterAllTodos = todoList.filter((todo) => todo.completed === true);
    renderTodos(filterAllTodos);
  } else {
    renderTodos(todoList);
  }
};

allTodoBtn.addEventListener('click', () => filterTodos(ALL_TODO));
activeTodoBtn.addEventListener('click', () => filterTodos(ACTIVE_TODO));
completedTodoBtn.addEventListener('click', () => filterTodos(COMPLETED_TODO));
