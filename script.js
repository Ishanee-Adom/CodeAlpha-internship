function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();
    
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    let taskList = document.getElementById("taskList");
    let listItem = document.createElement("li");

    listItem.innerHTML = `
        <span onclick="toggleComplete(this)">${taskText}</span>
        <button class="delete-btn" onclick="removeTask(this)">X</button>
    `;

    taskList.appendChild(listItem);
    taskInput.value = "";
}

function toggleComplete(taskElement) {
    taskElement.classList.toggle("completed");
}

function removeTask(button) {
    let taskList = document.getElementById("taskList");
    taskList.removeChild(button.parentElement);
}