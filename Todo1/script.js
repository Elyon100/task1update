function editTask(taskId) {
    // Implement task editing logic here
    console.log(`Editing task with ID: ${taskId}`);
}

function deleteTask(taskId) {
    // Implementing task deletion logic here
    console.log(`Deleting the task with ID: ${taskId}`);

}

function addTask() {
    const title =
    document.getElementById('newTaskTitle').value;
    const description =
    document.getElementById('newTaskDescription').value;

    // Create a new task element
    const newTask = 
    document.createElement('div');
    newTask.className = 'task';
    newTask.innerHTML = `
    <input type="checkbox" id="task3">
    <label for="task3" class="title">${title}</label>
    <p class="description">${description}</p>
    <button onclick="editTask('task3')">Edit</button>
    <button onclick="deleteTask('task3')">Delete</button>
    `;

    // Append the new task to the container

    document.querySelector('.container').appendChild(newTask);

    // Clear input fields

    document.getElementById('newTaskTitle').v
    alue ='';

    document.getElementById('newTaskDescription').v
    alue ='';
}