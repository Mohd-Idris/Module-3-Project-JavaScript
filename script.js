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
11. Clear all the inputs.
*/

// Delcare the form and input elements
const todoForm = document.getElementById("todo-form");
const nameInput = document.getElementById("nameInput");
const priorityInput = document.getElementById("priorityInput");
const dateInput = document.getElementById("dateInput");

// // Declare the buttons
const addTask = document.getElementById("btnAddTask");
const editTask = document.getElementById("btnEditTask");
// const deleteTask = document.getElementById("btnDeleteTask");

// Declare the task cards
const minorTaskCard = document.getElementById("minor-task");
const majorTaskCard = document.getElementById("major-task");
const criticalTaskCard = document.getElementById("critical-task");
const completedTaskCard = document.getElementById("completed-task");

let editTaskVar = null;

// Set a minimum date to Today date
const minDate = new Date().toISOString().split("T")[0]; // This method turns the data into a text format e.g. 2026-07-17T20:17:10.000Z
dateInput.setAttribute("min", minDate);

todoForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the form from submitting and refreshing the page

  const taskNameCheck = nameInput.value.trim();
  if (taskNameCheck === "") {
    alert("Please enter a task name first !");
    return;
  }

  // Get the current values from the form inputs
  const nameValue =
    nameInput.value.trim().charAt(0).toUpperCase() +
    nameInput.value.trim().slice(1); // Convert the task name to uppercase

  const priorityValue = priorityInput.value || "Minor"; // Set a default value for the priority input, if it's not been selected by the user .
  const dateValue = dateInput.value.trim();

  // priorityValue = !priorityValue ? "Minor" : priorityValue;

  let dueDay;
  if (priorityValue === "Minor") {
    dueDay = "5 days";
  } else if (priorityValue === "Major") {
    dueDay = "3 days";
  } else if (priorityValue === "Critical") {
    dueDay = "1 day";
  }

  let dueDateVar;
  const selectedDate = new Date(dateValue);
  const today = new Date();

  if (dateValue !== "") {
    today.setHours(0, 0, 0, 0);
    selectedDate.setHours(0, 0, 0, 0);

    if (selectedDate < today) {
      alert("Invalid date");
      return;
    }

    const day = String(selectedDate.getDate()).padStart(2, "0");
    const month = String(selectedDate.getMonth() + 1).padStart(2, "0");
    const year = selectedDate.getFullYear();

    dueDateVar = `${day}/${month}/${year}`;
  } else {
    const day = String(today.getDate()).padStart(2, "0");
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const year = today.getFullYear();
    dueDateVar = `${day}/${month}/${year}`;
  }

  // Create a new task card based on the priority value and add it to the corresponding task card container
  const taskCard = document.createElement("div");
  taskCard.classList.add(`task-card`, `${priorityValue.toLowerCase()}`);
  taskCard.dataset.due = dueDateVar;
  taskCard.innerHTML = `


    <p><span class="bold-text">Task:</span> <span class="task-name"> ${nameValue}</span></p>
    <p><span class="bold-text">Priority:</span> <span class="task-priority"> ${priorityValue}</span></p> 
    <p><span class="bold-text">Due Day:</span> <span class="task-due-day"> ${dueDay}</span></p> 
    <p><span class="bold-text">Due Date:</span> <span class="task-due-date"> ${dueDateVar}</span></p> 
   

    <div class="task-actions">
      <span class="task-action-icon update-icon"><i class="fa-solid fa-pencil"></i></span>
      <span class="task-action-icon delete-icon"><i class="fa-solid fa-circle-xmark"></i></span>
      <span class="task-action-icon done-icon"><i class="fa-solid fa-circle-check"></i></span>
    </div>
  `;

  // Check the priority first and then add it to the right card
  if (priorityValue === "Minor") {
    minorTaskCard.appendChild(taskCard);
  } else if (priorityValue === "Major") {
    majorTaskCard.appendChild(taskCard);
  } else if (priorityValue === "Critical") {
    criticalTaskCard.appendChild(taskCard);
  }

  // delete the task card when the Delete icon/sign is clicked
  taskCard
    .querySelector(".delete-icon")
    .addEventListener("click", function (event) {
      event.stopPropagation(); // Prevent the click event from bubbling up to the task card

      const messageCheck = confirm(
        "You are going to delete this task, Are you sure ?",
      );
      if (messageCheck) {
        taskCard.remove(); // Remove the task card from the DOM
        alert("The Task has been deleted successfullly!");
        resetForm();
      }
    });

  // update the task when the Update icon/sign is clicked
  taskCard
    .querySelector(".update-icon")
    .addEventListener("click", function (event) {
      event.stopPropagation(); // Prevent the click event from bubbling up to the task card

      editTaskVar = taskCard;
      nameInput.value = taskCard.querySelector(".task-name").textContent;
      priorityInput.value = taskCard
        .querySelector(".task-priority")
        .textContent.trim();
      const savedData = taskCard
        .querySelector(".task-due-date")
        .textContent.trim();
      const [day, month, year] = savedData.split("/"); // A shorthand way to assign the same value to these variables
      dateInput.value = `${year}-${month}-${day}`;

      addTask.style.display = "none";
      editTask.style.display = "inline-block";
    });

  // mark the task as completed when the Check icon/sign is clicked
  taskCard
    .querySelector(".done-icon")
    .addEventListener("click", function (event) {
      event.stopPropagation(); // Prevent the click event from bubbling up to the task card

      const today = new Date();

      const completedDay = String(today.getDate()).padStart(2, "0");
      const completedMonth = String(today.getMonth() + 1).padStart(2, "0");
      const completedYear = today.getFullYear();

      const completeddDate = `${completedDay}/${completedMonth}/${completedYear}`;

      taskCard.innerHTML = `
      <p><span class="bold-text">Task:</span> <span class="task-name"> ${nameValue}</span></p>
      <p><span class="bold-text">Priority:</span> <span class="task-priority"> ${priorityValue}</span></p> 
      <p><span class="bold-text">Created Date:</span> <span class="task-created-date"> ${dueDateVar}</span></p>
      <p><span class="bold-text">Completed Date:</span> <span class="task-completed-date"> ${completeddDate}</span></p>
    `;

      taskCard.classList.remove("minor", "major", "critical"); // Remove the priority classes from the task card
      taskCard.classList.add("completed");
      completedTaskCard.appendChild(taskCard);
    });

  resetForm();
});

editTask.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent the form from submitting and refreshing the page

  const updatedName =
    nameInput.value.trim().charAt(0).toUpperCase() +
    nameInput.value.trim().slice(1);
  const updatedPriority = priorityInput.value;
  const updateDueDate = dateInput.value;

  let updateDueDateVar;
  const selectedDate = new Date(updateDueDate);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  if (updateDueDate !== "") {
    selectedDate.setHours(0, 0, 0, 0);

    if (selectedDate < today) {
      alert("Invalid date");
      return;
    }

    const day = String(selectedDate.getDate()).padStart(2, "0");
    const month = String(selectedDate.getMonth() + 1).padStart(2, "0");
    const year = selectedDate.getFullYear();

    updateDueDateVar = `${day}/${month}/${year}`;
  } else {
    const day = String(today.getDate()).padStart(2, "0");
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const year = today.getFullYear();

    updateDueDateVar = `${day}/${month}/${year}`;
  }

  editTaskVar.dataset.due = updateDueDateVar;

  // Set DueDay for the task that's been updated based on its priority
  let newDueDay;
  if (updatedPriority === "Minor") {
    newDueDay = "5 days";
  } else if (updatedPriority === "Major") {
    newDueDay = "3 days";
  } else if (updatedPriority === "Critical") {
    newDueDay = "1 day";
  }

  // get the updated values
  editTaskVar.querySelector(".task-name").textContent = updatedName;
  editTaskVar.querySelector(".task-priority").textContent = updatedPriority;
  editTaskVar.querySelector(".task-due-day").textContent = newDueDay;
  editTaskVar.querySelector(".task-due-date").textContent = updateDueDateVar;

  //update priority class & move the card
  editTaskVar.classList.remove("minor", "major", "critical");
  editTaskVar.classList.add(updatedPriority.toLowerCase());

  if (!editTaskVar.classList.contains("completed")) {
    if (updatedPriority === "Minor") {
      minorTaskCard.appendChild(editTaskVar);
    } else if (updatedPriority === "Major") {
      majorTaskCard.appendChild(editTaskVar);
    } else if (updatedPriority === "Critical") {
      criticalTaskCard.appendChild(editTaskVar);
    }
  }

  resetForm();
  editTaskVar = null;
});

function resetForm() {
  nameInput.value = "";
  priorityInput.value = "";
  dateInput.value = "";
  addTask.style.display = "inline-block";
  editTask.style.display = "none";
}

// ------------------------------------------------------------------------------------------------------------------------

// Pseudo code for the To-Do Application Sign up Page
//---------------------------------------------------
/* 
1. Get the form inputs from the user (Full Name, Email, Password and Confirm Password).
2. Wait the user to click the "Sign Up" button.
3. Read the values that the user entered in the form inputs.
4. Check if the data is valid (not empty).
   4.1 Enter a valid name.
   4.2 Check the email if the enterted email meets requirements.
   4.3 Check the password if the enterted password meets requirements.
   4.4 Check the confirm password if matches the password.
5. When the user clicks the "Sign Up" button, get the values from the form inputs.
6. Show a message that the account has been created successfully.
7. Clear all the inputs.
8. Re-direct the user to the Login/Sign In page. 
*/

// Delcare the Sign-Up form input elements
const signUpForm = document.querySelector(".sign-up-form");
const fullNameInput = document.querySelector(".fullname-input");
const emailInput = document.querySelector(".email-input");
const passwordInput = document.querySelector(".password-input");
const confirmPasswordInput = document.querySelector(".confirm-password-input");

// Valid the pattern of the inputs
const namePattern = /^[A-Za-z ]{2, }$/;
const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,8}$/;

signUpForm.addEventListener("submit", function (event) {
  editTask.preventDefault();

  // Get the values from the Sign Up form inputs
  const fullnameValue = fullNameInput.value.trim();
  const emailValue = emailInput.value.trim().toLowerCase();
  const passwordValue = passwordInput.value.trim();
  const confirmPasswordValue = confirmPasswordInput.value.trim();

  // Check all the form empty fields
  if (
    !fullnameValue ||
    !emailValue ||
    !passwordValue ||
    !confirmPasswordValue
  ) {
    alert("Please Fill in all the Form's Fields ");
    return;
  }

  // Check Full Name is not empty
  if (!namePattern.test(fullnameValue)) {
    alert(
      "Full Name input can only contain letters and spaces with minimum 2 characters ",
    );
    return;
  }

  // Check Email is not empty
  if (!emailPattern.test(emailValue)) {
    alert(
      "You've entered invalid email, Please enter a valid one e.g. mail@example.com ",
    );
    return;
  }

  // Check Password length
  if (!passwordValue.length < 8) {
    alert("Passsword must have at least 8 characters");
    return;
  }

  // Check Confirm Password is matching the Password input
  if (confirmPasswordValue !== passwordValue) {
    alert("The passwords you entered are not matching, Please try again ... ");
    return;
  }
});
