document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('taskForm');
    const taskInput = document.getElementById('taskInput');
    const dueDate = document.getElementById('dueDate');
    const priority = document.getElementById('priority');
    const taskList = document.getElementById('taskList');

    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const taskText = taskInput.value;
        const taskDueDate = dueDate.value;
        const taskPriority = priority.value;

        if (taskText.trim() === '') {
            alert('Please enter a task.');
            return;
        }

        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
            <span>${taskText}</span>
            <span>Due: ${taskDueDate}</span>
            <span>Priority: ${taskPriority}</span>
            <button class="completeBtn">Complete</button>
            <button class="editBtn">Edit</button>
            <button class="deleteBtn">Delete</button>
        `;
        
        taskList.appendChild(taskItem);

        taskInput.value = '';
        dueDate.value = '';
    });

    taskList.addEventListener('click', (e) => {
        if (e.target.classList.contains('completeBtn')) {
            const task = e.target.parentElement;
            task.classList.toggle('completed');
        } else if (e.target.classList.contains('editBtn')) {
            const task = e.target.parentElement;
            const spans = task.querySelectorAll('span');

            const newText = prompt('Enter new task description:', spans[0].textContent);
            if (newText !== null) {
                spans[0].textContent = newText;
            }

            const newDueDate = prompt('Enter new due date:', spans[1].textContent.replace('Due: ', ''));
            if (newDueDate !== null) {
                spans[1].textContent = 'Due: ' + newDueDate;
            }

            const newPriority = prompt('Enter new priority:', spans[2].textContent.replace('Priority: ', ''));
            if (newPriority !== null) {
                spans[2].textContent = 'Priority: ' + newPriority;
            }
        } else if (e.target.classList.contains('deleteBtn')) {
            const task = e.target.parentElement;
            task.remove();
        }
    });
});
