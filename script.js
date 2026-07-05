// Pseudo code for the To-Do Application
//--------------------------------------
/* 
1. Get the form inputs from the user (task name and priority).
2. Wait the user to click the "Add Task" button.
3. Read the values that the user entered in the form inputs.
4. Check if the data is valid (not empty).
5. When the user clicks the "Add Task" button, get the values from the form inputs.
6. Based on the priority value, create a new task card and add it to the corresponding
   task card container (minor, major, critical).
7. Clear the form inputs after adding the task.
8. Allow the user to edit or delete tasks by clicking the corresponding buttons on each task card.
9. Update/delete the task card container when a task is edited or deleted (if the user has the privilege).  
10. Allow the user to mark tasks as completed and move them to 
    the completed task card container.
*/

// Decare the form and input elements
const todoForm = document.getElementById("todo-form");
const nameInput = document.getElementById("name-input");
const priorityInput = document.getElementById("priority-input");

// Declare the buttons
const addTask = document.getElementById("btn-add-task");
const editTask = document.getElementById("btn-edit-task");
const deleteTask = document.getElementById("btn-delete-task");

// Declare the task cards
const minorTaskCard = document.getElementById("minor-task");
const majorTaskCard = document.getElementById("major-task");
const criticalTaskCard = document.getElementById("priority-task");
const completedTaskCard = document.getElementById("completed-task");

todoForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the form from submitting and refreshing the page

  // Get the current values from the form inputs
  const nameValue = nameInput.value.trim(); // Convert the task name to uppercase
  let priorityValue = priorityInput.value;

  // Set a default priority value for the task if the user does not select any from the list.
  priorityValue = !priorityValue ? "Minor" : priorityValue;

  // Set the Due days for the each task due to the priority value. The due days are set as follows:
  let dueDay;

  if (priorityValue === "Minor") {
    dueDay = 5;
  } else if (priorityValue === "Major") {
    dueDay = 3;
  } else if (priorityValue === "Critical") {
    dueDay = 1;
  }
  // Test it in console
  console.log(
    "The Task is: ",
    nameValue + "\n",
    "The Priority for this task is:",
    priorityValue + "\n",
    "The Due days for this task is:",
    dueDay,
  );

  // Create a new task card based on the priority value and add it to the corresponding task card container
  const taskCard = document.createElement("div");
  // taskCard.classList.add(`task-card ${priorityValue.toLowerCase()}-task-card`);
  taskCard.classList.add(`task-card`, `${priorityValue.toLowerCase()}`);
  taskCard.innerHTML = `
    <!-- <h3>${nameValue}</h3> -->
    <!-- <p>Priority: ${priorityValue}</p> -->
    <!-- <p>Due in: ${dueDay} days</p> -->
    <!-- <button class="btn-edit-task">Edit</button> -->
    <!-- <button class="btn-delete-task">Delete</button> -->

    <p><span class="bold-text">Task:</span> ${nameValue}</p>
    <p><span class="bold-text">Priority:</span> ${priorityValue}</p> 
    <p><span class="bold-text">Due Day:</span> ${dueDay} days</p> 
  `;

  if (priorityValue === "Minor") {
    minorTaskCard.appendChild(taskCard);
  } else if (priorityValue === "Major") {
    majorTaskCard.appendChild(taskCard);
  } else if (priorityValue === "Critical") {
    criticalTaskCard.appendChild(taskCard);
  }

  // Clear the form inputs after adding the task
  nameInput.value = "";
  priorityInput.value = "";
});
