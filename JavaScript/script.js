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
10. Allow the user to mark tasks as completed and move them to the completed task card container.
11. Clear all the inputs.
*/

// Delcare the form and input elements
const todoForm = document.getElementById("todo-form");
const nameInput = document.getElementById("nameInput");
const priorityInput = document.getElementById("priorityInput");
const dateInput = document.getElementById("dateInput");

const dateWrapper = document.getElementById("date-wrapper");
// const applicationLink = document.getElementById("application-link");
// const WelcomeArea = document.getElementById("welcome-area");
// const welcomeMessage = document.getElementById("welcome-message");

// // Declare the buttons
const addTask = document.getElementById("btnAddTask");
const editTask = document.getElementById("btnEditTask");
// const deleteTask = document.getElementById("btnDeleteTask");

// Declare the task cards
const minorTaskCard = document.getElementById("minor-task");
const majorTaskCard = document.getElementById("major-task");
const criticalTaskCard = document.getElementById("critical-task");
const completedTaskCard = document.getElementById("completed-task");

// Variable to hold the task card being edited
let editTaskVar = null;

// Function to format the date to "dd/mm/yyyy" format
function formatDate(date) {
  try {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  } catch (error) {
    console.error("❌ Error formatting date: ", error.message);
    return "Invalid Date";
  }
}

// Function to get created date and auto calculate the due date by priority
function getDueDate(priority, customDate = null) {
  try {
    const createdDate = new Date();
    let dueDate;

    // Check if the priority is "Custom" and use the custom date provided by the user
    if (priority === "Custom") {
      dueDate = new Date(customDate);
    } else {
      // Calculate the due date based on the priority value
      dueDate = new Date(createdDate);

      if (priority === "Minor") {
        dueDate.setDate(createdDate.getDate() + 5);
      } else if (priority === "Major") {
        dueDate.setDate(createdDate.getDate() + 3);
      } else if (priority === "Critical") {
        dueDate.setDate(createdDate.getDate() + 1);
      }
    }
    // Return the formatted created date and due date
    return {
      createdDate: formatDate(createdDate),
      dueDate: formatDate(dueDate),
    };
  } catch (error) {
    console.error("❌ Error calculating due date: ", error.message);
    alert("❌ Error calculating date ... Please try again");
    return {
      createdDate: "",
      dueDate: "",
    };
  }
}
try {
  // outer try first line defense
  priorityInput?.addEventListener("change", function () {
    try {
      // inner try second line defense
      if (priorityInput.value === "Custom") {
        dateWrapper.style.display = "flex";
        // Enable the date input field when "Custom" is selected
        // dateInput.disabled = false; // should change this to be removed
        dateInput.value = "";
      } else {
        dateWrapper.style.display = "none";
        // Disable the date input field for other priority values
        // dateInput.disabled = true;
        dateInput.value = "";
      }
    } catch (error) {
      console.error("❌ Error changing priority: ", error.message);
    }
  });
} catch (error) {
  console.error("❌ Priority change error: ", error.message);
}

try {
  /* Set a minimum date to Today date, so the user can't select a past date for the task
   This method turns the data into a text format e.g. 2026-07-17T20:17:10.000Z */
  const minDate = new Date().toISOString().split("T")[0];
  dateInput?.setAttribute("min", minDate);

  // Disable the date input field by default until "Custom" is selected
  // dateInput.disabled = true;
} catch (error) {
  console.error("❌ Error setting min date: ", error.message);
}
try {
  todoForm?.addEventListener("submit", function (event) {
    // Prevent the form from submitting and refreshing the page
    event.preventDefault();
    try {
      const taskNameCheck = nameInput.value.trim();
      if (taskNameCheck === "") {
        alert("⚠️ Please enter a task name first !");
        return;
      }
      // Get the current values from the form inputs
      const nameValue =
        // Convert the 1st letter of the task name to uppercase
        nameInput.value.trim().charAt(0).toUpperCase() +
        nameInput.value.trim().slice(1);

      // Set a default value for the priority input, if it's not been selected by the user .
      const priorityValue = priorityInput.value || "Minor";

      // Check if the priority is "Custom" and the date input is empty
      if (priorityValue === "Custom" && dateInput.value === "") {
        alert("⚠️ Please select a due date for the custom priority task.");
        return;
      }

      // If the priority is "Custom", use the date input value provided by the user
      const { createdDate, dueDate } = getDueDate(
        priorityValue,
        dateInput.value,
      );
      // }
      // Create a new task card based on the priority value and add it to the corresponding task card container
      const taskCard = document.createElement("div");
      taskCard.classList.add(`task-card`, `${priorityValue.toLowerCase()}`);

      // Store the due date in a data attribute for later use
      taskCard.dataset.due = dueDate;

      // Store the priority in a data attribute for later use
      taskCard.dataset.priority = priorityValue;

      // Set the inner HTML of the task card with the task details and action icons
      taskCard.innerHTML = `
  
  
      <p><span class="bold-text">Task:</span> <span class="task-name"> ${nameValue}</span></p>
      <p><span class="bold-text">Priority:</span> <span class="task-priority"> ${priorityValue}</span></p> 
      <p><span class="bold-text">Created Date:</span> <span class="task-created-date"> ${createdDate}</span></p> 
      <p><span class="bold-text">Due Date:</span> <span class="task-due-date"> ${dueDate}</span></p> 
     
  
      <div class="task-actions">
        <span class="task-action-icon update-icon"><i class="fa-solid fa-pencil"></i></span>
        <span class="task-action-icon delete-icon"><i class="fa-solid fa-circle-xmark"></i></span>
        <span class="task-action-icon done-icon"><i class="fa-solid fa-circle-check"></i></span>
      </div>
    `;
      // Check the priority first and then add it to the right card
      if (priorityValue === "Minor" || priorityValue === "Custom") {
        minorTaskCard.appendChild(taskCard);
      } else if (priorityValue === "Major") {
        majorTaskCard.appendChild(taskCard);
      } else if (priorityValue === "Critical") {
        criticalTaskCard.appendChild(taskCard);
      }

      attchTaskEvents(taskCard);
      resetForm();
    } catch (error) {
      console.error("❌ Error adding task: ", error.message);
      alert("Could not add task, please ckeck your task input");
    }
  });
} catch (error) {
  console.error("❌ Form submit error: ", error.message);
}

function attchTaskEvents(taskCard) {
  // delete the task card when the Delete icon/sign is clicked
  taskCard
    .querySelector(".delete-icon")
    .addEventListener("click", function (event) {
      // Prevent the click event from bubbling up to the task card
      event.stopPropagation();

      try {
        const messageCheck = confirm(
          "⚠️ You are going to delete this task, Are you sure ?",
        );
        if (messageCheck) {
          // Remove the task card from the DOM
          taskCard.remove();
          alert("✅ The Task has been deleted successfullly!");
          resetForm();
        }
      } catch (error) {
        console.error("❌ Error deleting task: ", error.message);
        alert("❌ Could not delete this task");
      }
    });

  // update the task when the Update icon/sign is clicked
  taskCard
    .querySelector(".update-icon")
    .addEventListener("click", function (event) {
      // Prevent the click event from bubbling up to the task card
      event.stopPropagation();

      try {
        // Store the task card being edited in the editTaskVar variable
        editTaskVar = taskCard;

        nameInput.value = taskCard.querySelector(".task-name").textContent;

        priorityInput.value = taskCard
          .querySelector(".task-priority")
          .textContent.trim();

        const savedPriority = taskCard
          .querySelector(".task-priority")
          .textContent.trim(); // priorityInput.value

        const savedDueDate = taskCard
          .querySelector(".task-due-date")
          .textContent.trim();

        // A shorthand way to assign the same value to these variables
        const [day, month, year] = savedDueDate.split("/");
        // dateInput.value = `${year}-${month}-${day}`;

        // Enable the date input field if the saved priority is "Custom", otherwise disable it
        if (savedPriority === "Custom") {
          dateWrapper.style.display = "flex";
          // dateInput.disabled = false;
          dateInput.value = `${year}-${month}-${day}`;
        } else {
          dateWrapper.style.display = "none";
          // dateInput.disabled = true;
          dateInput.value = "";
        }

        addTask.style.display = "none";
        editTask.style.display = "inline-block";

        // Smooth scroll + pulse movement to drag the user attention when update a certain task
        todoForm.scrollIntoView({ behavior: "smooth", block: "center" });
        todoForm.classList.add("edit-mode", "pulse-active");
        setTimeout(() => {
          todoForm.classList.remove("pulse-active");
        }, 1200);

        nameInput.focus();
        nameInput.select();
      } catch (error) {
        console.error("❌ Error editing task: ", error.message);
        alert(
          "❌ Could not load task for editing, please ckeck if there's a task around",
        );
      }
    });

  // mark the task as completed when the Check icon/sign is clicked
  taskCard
    .querySelector(".done-icon")
    .addEventListener("click", function (event) {
      // Prevent the click event from bubbling up to the task card
      event.stopPropagation();

      try {
        // Get the current values
        const currentName = taskCard.querySelector(".task-name").textContent;
        const currentPriority =
          taskCard.querySelector(".task-priority").textContent;
        const currentCreatedDate = taskCard
          .querySelector(".task-created-date")
          .textContent.trim();

        const completedDate = formatDate(new Date());

        taskCard.innerHTML = `
              <p><span class="bold-text">Task:</span> <span class="task-name"> ${currentName}</span></p>
              <p><span class="bold-text">Priority:</span> <span class="task-priority"> ${currentPriority}</span></p> 
              <p><span class="bold-text">Created Date:</span> <span class="task-created-date"> ${currentCreatedDate}</span></p>
              <p><span class="bold-text">Completed Date:</span> <span class="task-completed-date"> ${completedDate}</span></p>
            `;

        taskCard.classList.remove("minor", "major", "critical"); // Remove the priority classes from the task card
        taskCard.classList.add("completed");
        completedTaskCard.appendChild(taskCard);
      } catch (error) {
        console.error("❌ Error completing task: ", error.message);
        alert("❌ Could not mark this task as completed");
      }
    });
}

try {
  editTask?.addEventListener("click", function (event) {
    // Prevent the form from submitting and refreshing the page
    event.preventDefault();

    try {
      const updatedName =
        nameInput.value.trim().charAt(0).toUpperCase() +
        nameInput.value.trim().slice(1);

      // Set a default value for the priority input, if it's not been selected by the user
      const updatedPriority = priorityInput.value || "Minor";

      if (updatedPriority === "Custom" && dateInput.value === "") {
        alert("⚠️ Please select a due date for the custom priority task.");
        return;
      }

      // Get the updated created date and due date based on the updated priority value
      const { createdDate: updatedCreatedDate, dueDate: updatedDueDate } =
        getDueDate(updatedPriority, dateInput.value);

      // get the updated values and update the task card with the new values
      editTaskVar.querySelector(".task-name").textContent = updatedName;
      editTaskVar.querySelector(".task-priority").textContent = updatedPriority;
      editTaskVar.querySelector(".task-created-date").textContent =
        updatedCreatedDate;
      editTaskVar.querySelector(".task-due-date").textContent = updatedDueDate;

      // Update the due date in the data attribute
      editTaskVar.dataset.due = updatedDueDate;
      // Update the priority in the data attribute
      editTaskVar.dataset.priority = updatedPriority;

      //update priority class & move the card
      editTaskVar.classList.remove("minor", "major", "critical", "custom");
      editTaskVar.classList.add(updatedPriority.toLowerCase());

      if (!editTaskVar.classList.contains("completed")) {
        if (updatedPriority === "Minor" || updatedPriority === "Custom") {
          minorTaskCard.appendChild(editTaskVar);
        } else if (updatedPriority === "Major") {
          majorTaskCard.appendChild(editTaskVar);
        } else if (updatedPriority === "Critical") {
          criticalTaskCard.appendChild(editTaskVar);
        }
      }
      // Clear the form inputs and reset the buttons
      resetForm();

      // Reset the editTaskVar to null after editing
      editTaskVar = null;
    } catch (error) {
      console.error("❌ Error updating task: ", error.message);
      alert("❌ Could not update this task, please check again");
    }
  });
} catch (error) {
  console.error("❌ Edit button error: ", error.message);
}

function resetForm() {
  try {
    nameInput.value = "";
    priorityInput.value = "";
    dateInput.value = "";
    // Hide date wrapper when form resets
    dateWrapper.style.display = "none";
    // Reset the buttons visibility
    addTask.style.display = "inline-block";
    editTask.style.display = "none";
    todoForm.classList.remove("edit-mode", "pulse-active");
  } catch (error) {
    console.error("❌ Error resetting form: ", error.message);
  }
}
