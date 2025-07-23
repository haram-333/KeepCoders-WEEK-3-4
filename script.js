// Wait for the DOM to load before doing anything
document.addEventListener('DOMContentLoaded', () => {
  // Grab our DOM elements
  const taskInput = document.getElementById('taskInput');
  const addTaskBtn = document.getElementById('addTaskBtn');
  const taskList = document.getElementById('taskList');

  // Function to add a new task
  function addNewTask() {
    const taskText = taskInput.value.trim();
    if (!taskText) {
      alert("Hey, you forgot to type a task!");
      return;
    }

    // Create a new list item
    const li = document.createElement('li');
    li.className = 'task-item';

    // Task text goes in a span
    const taskSpan = document.createElement('span');
    taskSpan.className = 'task-text';
    taskSpan.textContent = taskText;

    // Edit button
    const editBtn = document.createElement('button');
    editBtn.className = 'edit-btn';
    editBtn.textContent = 'Edit';
    editBtn.addEventListener('click', () => {
      editTask(taskSpan);
    });

    // Delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => {
      taskList.removeChild(li); // Poof, gone!
    });

    // Put it all together
    li.append(taskSpan, editBtn, deleteBtn);
    taskList.appendChild(li);

    // Clear the input
    taskInput.value = '';
    taskInput.focus(); // Ready for the next task
  }

  // Function to edit a task
  function editTask(taskSpan) {
    const newText = prompt('Update your task:', taskSpan.textContent);
    if (newText && newText.trim()) {
      taskSpan.textContent = newText.trim();
    }
    // If they cancel or enter empty, we just leave it as is
  }

  // Event listeners for adding tasks
  addTaskBtn.addEventListener('click', addNewTask);
  taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      addNewTask();
    }
  });

  // TODO: Maybe add localStorage to save tasks later?
});