// Pseudo code for the Login Page
//---------------------------------------------------

/*

 1. Get the form inputs from the user (Email and Password).
 2. Wait the user to click the "Login" button.
 3. Read the values that the user entered in the form inputs.
 4. Check if the data is valid - Phase #1 (inputs are not empty).
 5. After checking Phase #1, then start checking Phase #2:
   5.1 Check the email if the entered email meets Regex pattern requirements.
   5.2 Check the password if the entered password meets Regex pattern requirements.
 6. When the user clicks the "Login" button, get the values from the form inputs.
 7. Compare these values with the data from a browser's LocalStorage.
 8. Show a message that the login was successful.
 9. Clear all the inputs.
 10. Re-direct the user to the ToDo-Application page. 

*/

// Delcare the Login form input elements
const loginForm = document.querySelector("#login-form");
const emailInput = document.querySelector("#email-input");
const passwordInput = document.querySelector("#password-input");

// Declare the Login messages that will be appeared based on the action (Success, Error)
const loginMessage = document.querySelector("#login-message");
const errorMessageForm = document.querySelector("#error-message");

// Valid the pattern of the inputs using Regex Pattern
const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,8}$/;
const passwordPattern = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d@$!%*#?&]{8,}$/;

try {
  // Safe Listener - Login submit handler
  loginForm?.addEventListener("submit", function (event) {
    event.preventDefault();

    try {
      // Get the values from the Sign Up form inputs
      const emailValue = emailInput.value.trim().toLowerCase();
      const passwordValue = passwordInput.value.trim();

      // Defined an array to put all the errors messages into it
      let errorMessages = [];

      // Call the function and put it inside the array variable
      errorMessages = getLoginFormErrors(emailValue, passwordValue);

      // Check if the array have errors
      if (errorMessages.length > 0) {
        errorMessageForm.innerText = errorMessages.join(".\n");
      } else {
        let savedUser;
        try {
          // Get the existing user data from local storage or initialize an empty array
          savedUser = JSON.parse(localStorage.getItem("appUsers")) || [];
        } catch (error) {
          console.error("❌ Error reading saved user: ", error.message);
          errorMessageForm.innerText =
            "❌ Saved data is corrupted, please Sign up first";
          return;
        }
        // Check if the email already exists in the local storage
        const foundUser = savedUser.find((user) => user.email === emailValue);

        // Check if the email not exists
        if (!foundUser) {
          errorMessageForm.innerText =
            "❌ email not found, please try again or Sign Up first";
          emailInput.classList.add("incorrect");
          passwordInput.classList.add("incorrect");
          return;
        }
        if (foundUser.password !== passwordValue) {
          errorMessageForm.innerText =
            "❌ Incorrect Password, Please try again";
          passwordInput.classList.add("incorrect");
          passwordInput.select();
          return;
        }

        // Login successful message
        loginMessage.innerText = "✅ Login successful! Redirecting Now...";

        try {
          // Save the logged in user into a localStorage
          localStorage.setItem(
            "logged-in-User",
            JSON.stringify({
              name: foundUser.fullname,
              email: foundUser.email,
            }),
          );
        } catch (error) {
          console.error("❌ Error saving login: ", error.message);
          alert("Login worked fine, but could not remember you");
        }
        // Call the function to reset the form inputs
        clearInputs();

        // Redirect to the To-Do-Application page after a short delay about 2 seconds
        setTimeout(() => {
          window.location.href = "./todo-page.html";
        }, 2000);
      }
    } catch (error) {
      console.error("❌ Login submit error: ", error.message);
      errorMessageForm.innerText = "❌ Something went wrong, please try again";
      return;
    }
  });
} catch (error) {
  console.error("❌ Login form error: ", error.message);
}

// Defined a function to get all error messages of the Login form
function getLoginFormErrors(email, password) {
  try {
    let errorMessages = [];

    // Phase 1: Check if the inputs are empty or not
    //----------------------------------------------

    // Check the Email input if it is empty or not
    if (!email) {
      errorMessages.push("❌ Your Email address is required");
      emailInput.classList.add("incorrect");
    }

    // Check the Password input if it is empty or not
    if (!password) {
      errorMessages.push("❌ Your Password is required");
      passwordInput.classList.add("incorrect");
    }

    // Phase 2: Check if the inputs are following the Regex patterns that we set for them or not
    //------------------------------------------------------------------------------------------

    // Check if there is no error in phase #1, proceed with phase #2
    if (errorMessages.length === 0) {
      // Validate the Email input with the Regex pattern
      if (!emailPattern.test(email)) {
        errorMessages.push(
          "❌ Please make sure your email is correct, e.g example@domain.com",
        );
        emailInput.classList.add("incorrect");
      }

      // Validate the Password input with the Regex pattern
      if (!passwordPattern.test(password)) {
        errorMessages.push(
          `❌ The password must have at least 8 characters, including a letter and a number`,
        );
        passwordInput.classList.add("incorrect");
      }
    }

    return errorMessages;
  } catch (error) {
    console.error("❌ Validation error: ", error.message);
    // That's because errorMessages is an array
    return ["Validation failed, please check your inputs"];
  }
}

try {
  // Defines an array contains all the inputs
  const allInputs = [emailInput, passwordInput].filter(
    (input) => input != null,
  );

  // Clearing the inputs that have errors
  allInputs.forEach((input) => {
    // Safe Listener - Form Input handler
    input?.addEventListener("input", () => {
      try {
        input.classList.remove("incorrect");
        if (errorMessageForm) errorMessageForm.innerText = "";
      } catch (error) {
        console.error("❌ Input clearing error: ", error.message);
      }
    });
  });
} catch (error) {
  console.error("❌ Input listener error: ", error.message);
}

// Function to clear all the inputs of the Sign Up form
function clearInputs() {
  try {
    loginForm.reset();
  } catch (error) {
    console.error("❌ Error clearing form: ", error.message);
  }
}
