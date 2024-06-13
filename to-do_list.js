document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const categorySelect = document.getElementById('category-select');
    const prioritySelect = document.getElementById('priority-select');
    const dueDateInput = document.getElementById('due-date');
    const addTaskButton = document.getElementById('add-task-button');
    const taskList = document.getElementById('task-list');

    addTaskButton.addEventListener('click', () => {
        const taskText = taskInput.value;
        const category = categorySelect.value;
        const priority = prioritySelect.value;
        const dueDate = dueDateInput.value;

        if (taskText.trim() === '') {
            alert('Please enter a task.');
            return;
        }

        const taskItem = document.createElement('div');
        taskItem.className = 'task-item';
        taskItem.innerHTML = `
            <div>
                <strong>${taskText}</strong> (${category} - ${priority}) ${dueDate ? `- Due: ${dueDate}` : ''}
            </div>
            <div>
                <button class="complete-task-button">Complete</button>
                <button class="delete-task-button">Delete</button>
            </div>
        `;

        taskList.appendChild(taskItem);
        taskInput.value = '';
        dueDateInput.value = '';

        taskItem.querySelector('.complete-task-button').addEventListener('click', () => {
            taskItem.classList.toggle('completed');
        });

        taskItem.querySelector('.delete-task-button').addEventListener('click', () => {
            taskList.removeChild(taskItem);
        });
    });
});
