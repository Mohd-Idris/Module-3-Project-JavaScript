// // // Pseudo code for the To-Do Application Sign up Page
// // //---------------------------------------------------
// // /*
// // 1. Get the form inputs from the user (Full Name, Email, Password and Confirm Password).
// // 2. Wait the user to click the "Sign Up" button.
// // 3. Read the values that the user entered in the form inputs.
// // 4. Check if the data is valid (not empty).
// //    4.1 Enter a valid name.
// //    4.2 Check the email if the enterted email meets requirements.
// //    4.3 Check the password if the enterted password meets requirements.
// //    4.4 Check the confirm password if matches the password.
// // 5. When the user clicks the "Sign Up" button, get the values from the form inputs.
// // 6. Show a message that the account has been created successfully.
// // 7. Clear all the inputs.
// // 8. Re-direct the user to the Login/Sign In page.
// // */

// // Delcare the Sign-Up form input elements
// const signUpForm = document.querySelector(".sign-up-form");
// const fullNameInput = document.querySelector(".fullname-input");
// const emailInput = document.querySelector(".email-input");
// const passwordInput = document.querySelector(".password-input");
// const confirmPasswordInput = document.querySelector(".confirm-password-input");

// // Valid the pattern of the inputs
// const namePattern = /^[A-Za-z ]{2, }$/;
// const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,8}$/;

// signUpForm.addEventListener("submit", function (event) {
//   event.preventDefault();

//   // Get the values from the Sign Up form inputs
//   const fullnameValue = fullNameInput.value.trim();
//   const emailValue = emailInput.value.trim().toLowerCase();
//   const passwordValue = passwordInput.value.trim();
//   const confirmPasswordValue = confirmPasswordInput.value.trim();

//   // Check all the form empty fields
//   if (
//     !fullnameValue ||
//     !emailValue ||
//     !passwordValue ||
//     !confirmPasswordValue
//   ) {
//     alert("Please Fill in all the Form's Fields ");
//     return;
//   }

//   // Check Full Name is not empty
//   if (!namePattern.test(fullnameValue)) {
//     alert(
//       "Full Name input can only contain letters and spaces with minimum 2 characters ",
//     );
//     return;
//   }

//   // Check Email is not empty
//   if (!emailPattern.test(emailValue)) {
//     alert(
//       "You've entered invalid email, Please enter a valid one e.g. mail@example.com ",
//     );
//     return;
//   }

//   // Check Password length
//   if (!passwordValue.length < 8) {
//     alert("Passsword must have at least 8 characters");
//     return;
//   }

//   // Check Confirm Password is matching the Password input
//   if (confirmPasswordValue !== passwordValue) {
//     alert("The passwords you entered are not matching, Please try again ... ");
//     return;
//   }
// });

// // Pseudo code for the To-Do Application Sign up Page
// //---------------------------------------------------
// /*
// 1. Get the form inputs from the user (Full Name, Email, Password and Confirm Password).
// 2. Wait the user to click the "Sign Up" button.
// 3. Read the values that the user entered in the form inputs.
// 4. Check if the data is valid (not empty).
//    4.1 Enter a valid name.
//    4.2 Check the email if the enterted email meets requirements.
//    4.3 Check the password if the enterted password meets requirements.
//    4.4 Check the confirm password if matches the password.
// 5. When the user clicks the "Sign Up" button, get the values from the form inputs.
// 6. Show a message that the account has been created successfully.
// 7. Clear all the inputs.
// 8. Re-direct the user to the Login/Sign In page.
// */

// Delcare the Sign-Up form input elements
const loginForm = document.querySelector("#login-form");
const emailInput = document.querySelector("#email-input");
const passwordInput = document.querySelector("#password-input");

const loginMessage = document.querySelector("#login-message");
const errorMessageForm = document.querySelector("#error-message");

// Valid the pattern of the inputs using Regex Pattern
const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,8}$/;
const passwordPattern = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d@$!%*#?&]{8,}$/;

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  // Get the values from the Sign Up form inputs
  const emailValue = emailInput.value.trim().toLowerCase();
  const passwordValue = passwordInput.value.trim();

  // Defined an array to put all the errors messages into it
  let errorMessages = [];

  errorMessages = getLoginFormErrors(emailValue, passwordValue);

  if (errorMessages.length > 0) {
    // event.preventDefault();
    errorMessageForm.innerText = errorMessages.join(".\n");
  } else {
    const savedUser = JSON.parse(localStorage.getItem("appUsers")) || [];
    // errorMessageForm.innerText = "";
    const foundUser = savedUser.find((user) => user.email === emailValue);
    // && user.password === passwordValue);
    if (!foundUser) {
      errorMessageForm.innerText =
        "⚠️ email not found, please try again or Sign Up first";
      emailInput.classList.add("incorrect");
      passwordInput.classList.add("incorrect");
      return;
    }
    if (foundUser.password !== passwordValue) {
      errorMessageForm.innerText = "⚠️ Incorrect Password, Please try again";
      passwordInput.classList.add("incorrect");
      return;
    }

    // Login successful message
    loginMessage.innerText = "✅ Login successful! Redirecting Now ...";

    // Save the logged-in user to localStorage
    localStorage.setItem(
      "logged-in-User",
      JSON.stringify({ name: foundUser.fullname, email: foundUser.email }),
    );
    clearInputs();

    // Redirect to the index.html page after a short delay
    setTimeout(() => {
      window.location.href = "../Templates/index.html";
    }, 3000); // Redirect after 3 seconds
  }

  // }
});

// Defined a function to get all error messages of the Sign up form
function getLoginFormErrors(email, password) {
  let errorMessages = [];

  // Phase 1: Check if the inputs are empty or not
  //----------------------------------------------

  // Check the Email input if it is empty or not
  if (!email) {
    errorMessages.push("⚠️ Your Email address is required");
    emailInput.classList.add("incorrect");
  }

  if (!password) {
    errorMessages.push("⚠️ Your Password is required");
    passwordInput.classList.add("incorrect");
  }

  // Phase 2: Check if the inputs are following the patterns that we set for them
  //-----------------------------------------------------------------------------

  if (errorMessages.length === 0) {
    // Validate the Email input with the pattern that we set
    if (!emailPattern.test(email)) {
      errorMessages.push("⚠️ Please make sure you write your email correctly");
      emailInput.classList.add("incorrect");
    }
    // Validate the Password input with the pattern that we set
    if (!passwordPattern.test(password)) {
      errorMessages.push(
        `⚠️ The password must have at least 1 letter, 1 number, and 8 or more characters, No spaces allowed`,
      );
      passwordInput.classList.add("incorrect");
    }
  }

  return errorMessages;
}

// Defines an array contains all the inputs
const allInputs = [emailInput, passwordInput].filter((input) => input != null);

// Clearing the inputs that have errors
allInputs.forEach((input) => {
  input.addEventListener("input", () => {
    // if (input.classList.contains("incorrect")) {
    input.classList.remove("incorrect");
    errorMessageForm.innerText = "";
    // }
  });
});

// Function to clear all the inputs of the Sign Up form
function clearInputs() {
  loginForm.reset();
}
