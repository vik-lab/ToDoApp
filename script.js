let tasks = [];

function addTask() {
    const input = document.getElementById('new-task');
    const taskText = input.value.trim();
    if (taskText) {
        tasks.push({ text: taskText, completed: false });
        input.value = '';
        renderTasks();
    }
}

function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

function removeTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

function renderTasks() {
  const list = document.getElementById('task-list');
  list.innerHTML = '';
  tasks.forEach((task, idx) => {
    let taskItem = document.createElement('li');
    taskItem.textContent = task.text;
    taskItem.style.textDecoration = task.completed ? 'line-through' : 'none';
    taskItem.onclick = () => toggleTask(idx);

    let removeBtn = document.createElement('button');
    removeBtn.textContent = "Delete";
    removeBtn.onclick = (e) => {
      e.stopPropagation();
      removeTask(idx);
    };
    taskItem.appendChild(removeBtn);
    list.appendChild(taskItem);
  });
}