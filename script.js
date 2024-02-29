// Function to add a new task to the list
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    // Check if the input is not empty
    if (taskInput.value.trim() !== '') {
        // Create a new list item
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item';
        listItem.innerText = taskInput.value;

        // Add a button to remove the task
        const removeButton = document.createElement('button');
        removeButton.className = 'btn btn-danger btn-sm float-right';
        removeButton.innerText = 'Remove';
        removeButton.onclick = function () {
            taskList.removeChild(listItem);
        };

        // Append the remove button to the list item
        listItem.appendChild(removeButton);

        // Append the list item to the task list
        taskList.appendChild(listItem);

        // Clear the input field
        taskInput.value = '';
    }
}
