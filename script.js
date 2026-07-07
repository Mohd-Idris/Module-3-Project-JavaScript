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
const nameInput = document.getElementById("nameInput");
const priorityInput = document.getElementById("priorityInput");

// Declare the buttons
const addTask = document.getElementById("btnAddTask");
const editTask = document.getElementById("btnEditTask");
// const deleteTask = document.getElementById("btnDeleteTask");

// Declare the task cards
const minorTaskCard = document.getElementById("minor-task");
const majorTaskCard = document.getElementById("major-task");
const criticalTaskCard = document.getElementById("critical-task");
const completedTaskCard = document.getElementById("completed-task");

todoForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the form from submitting and refreshing the page

  // Get the current values from the form inputs
  const nameValue =
    nameInput.value.trim().charAt(0).toUpperCase() +
    nameInput.value.trim().slice(1); // Convert the task name to uppercase
  let priorityValue = priorityInput.value;

  // Set a default priority value for the task if the user does not select any from the list.
  priorityValue = !priorityValue ? "Minor" : priorityValue;

  // Set the Due days for the each task due to the priority value. The due days are set as follows:
  // let dueDay ={"Minor": 5, "Major": 3, "Critical": 1}[priorityValue];

  if (priorityValue === "Minor") {
    dueDay = 5;
  } else if (priorityValue === "Major") {
    dueDay = 3;
  } else if (priorityValue === "Critical") {
    dueDay = 1;
  }
  // Test it in console
  // console.log(
  //   "The Task is: ",
  //   nameValue + "\n",
  //   "The Priority for this task is:",
  //   priorityValue + "\n",
  //   "The Due days for this task is:",
  //   dueDay,
  // );

  // Create a new task card based on the priority value and add it to the corresponding task card container
  const taskCard = document.createElement("div");
  taskCard.classList.add(`task-card`, `${priorityValue.toLowerCase()}`);
  taskCard.innerHTML = `


    <p><span class="bold-text task-text">Task:</span> ${nameValue}</p>
    <p><span class="bold-text" priority-text>Priority:</span> ${priorityValue}</p> 
    <p><span class="bold-text due-day-text">Due Day:</span> ${dueDay} day(s)</p> 
    <div class="task-actions">
      <span class="task-action-icon update-icon"><i class="fa-solid fa-pencil"></i></span>
      <span class="task-action-icon delete-icon"><i class="fa-solid fa-circle-xmark"></i></span>
      <span class="task-action-icon done-icon"><i class="fa-solid fa-circle-check"></i></span>
    </div>
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

  // Add an event listener to the task card to mark it as completed when clicked
  taskCard.addEventListener("click", function () {
    // Toggle the completed class on the task card
    taskCard.classList.remove("minor", "major", "critical"); // Remove the priority classes from the task card
    taskCard.classList.add("completed");
    taskCard.onclick = null; // Remove the click event listener to prevent further clicks
    completedTaskCard.appendChild(taskCard);
  });

  // delete the task card when the Delete icon/sign is clicked
  taskCard
    .querySelector(".delete-icon")
    .addEventListener("click", function (event) {
      event.stopPropagation(); // Prevent the click event from bubbling up to the task card
      taskCard.remove(); // Remove the task card from the DOM
      nameInput.value = "";
      priorityInput.value = "";
    });

  // update the task when the Update icon/sign is clicked
  taskCard
    .querySelector(".update-icon")
    .addEventListener("click", function (event) {
      event.stopPropagation(); // Prevent the click event from bubbling up to the task card
      const currentName = taskCard.querySelector(".task-text").textContent;
      const currentPriority = taskCard.classList.contains("minor")
        ? "Minor"
        : taskCard.classList.contains("major")
          ? "Major"
          : "Critical";

      nameInput.value = currentName;
      priorityInput.value = currentPriority;
      addTask.style.display = "none";
      editTask.style.display = "inline-block";
    });

  // mark the task as completed when the Check icon/sign is clicked
  taskCard
    .querySelector(".done-icon")
    .addEventListener("click", function (event) {
      event.stopPropagation(); // Prevent the click event from bubbling up to the task card
      taskCard.classList.remove("minor", "major", "critical"); // Remove the priority classes from the task card
      taskCard.classList.add("completed");
      // taskCard.onclick = null; // Remove the click event listener to prevent further clicks
      taskCard.querySelector(".task-actions").remove(); // Remove the task actions from the task card
      completedTaskCard.appendChild(taskCard);
    });

  editTask.addEventListener("click", function () {
    const updatedName =
      nameInput.value.trim().charAt(0).toUpperCase() +
      nameInput.value.trim().slice(1);
    const updatedPriority = priorityInput.value;

    taskCard.querySelector("p").textContent = `Task: ${updatedName}`;
    taskCard.querySelector("p:nth-child(2)").textContent =
      `Priority: ${updatedPriority}`;

    // Update the priority class on the task card
    taskCard.classList.remove("minor", "major", "critical");
    taskCard.classList.add(updatedPriority.toLowerCase());

    //move the task card to the corresponding task card container based on the updated priority value
    if (!taskCard.classList.contains("completed")) {
      if (updatedPriority === "Minor") {
        minorTaskCard.appendChild(taskCard);
      } else if (updatedPriority === "Major") {
        majorTaskCard.appendChild(taskCard);
      } else if (updatedPriority === "Critical") {
        criticalTaskCard.appendChild(taskCard);
      }
    }

    // Clear the form inputs after editing the task
    nameInput.value = "";
    priorityInput.value = "";

    addTask.style.display = "inline-block";
    editTask.style.display = "none";
  });
});
