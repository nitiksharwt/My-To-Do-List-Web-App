const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

todoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const text = todoInput.value.trim();
  if (!text) return;

  const li = document.createElement('li');
  li.innerHTML = `
    <span>${text}</span>
    <button class="done-btn">✔</button>
    <button class="remove-btn">✘</button>
  `;
  todoList.appendChild(li);
  todoInput.value = '';
});

todoList.addEventListener('click', (e) => {
  if (e.target.classList.contains('remove-btn')) {
    e.target.parentElement.remove();
  }
  if (e.target.classList.contains('done-btn')) {
    e.target.parentElement.querySelector('span').classList.toggle('done');
  }
});


const detailsForm = document.getElementById('details-form');

detailsForm.addEventListener('submit', (e) => {
  e.preventDefault();
  let valid = true;

  const taskName = document.getElementById('task-name');
  const taskDue = document.getElementById('task-due');
  const taskNotes = document.getElementById('task-notes');

  document.querySelectorAll('.error').forEach(el => el.textContent = '');

  if (!taskName.value.trim()) {
    document.getElementById('task-name-error').textContent = 'Task name is required';
    valid = false;
  }

  if (!taskDue.value) {
    document.getElementById('task-due-error').textContent = 'Please pick a due date';
    valid = false;
  }

  if (valid) {
    // Build a to-do item with the extra details and add it to the list
    const li = document.createElement('li');
    li.innerHTML = `
      <button class="done-btn">✔</button>
      <span class="task-text">${taskName.value.trim()} (due ${taskDue.value})</span>
      <button class="remove-btn">🗑</button>
    `;
    todoList.appendChild(li);

    alert(`Confirm: ${taskName.value.trim()} (due ${taskDue.value})`);
    detailsForm.reset();
  }
});