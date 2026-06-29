// const nameInput = document.getElementById("name-input");
// const priorityInput = document.getElementById("priority-input");

// const addTask = document.getElementById("btn-add-task");

// addTask.addEventListener("click", function() {
//   document.getElementById("name-input")
// //   console.log(nameValue);

// });

// Fixed spelling: getElementById
const nameInput = document.getElementById("name-input");
const priorityInput = document.getElementById("priority-input");
const addTask = document.getElementById("btn-add-task");

// Add click event
addTask.addEventListener("click", function () {
  // Get the current value when the button is clicked
  const nameValue = nameInput.value.trim();
  const priorityValue = priorityInput.value;

  // Test it in console
  console.log("Task: ", nameValue, "| Priority:", priorityValue);
});


// 1. 