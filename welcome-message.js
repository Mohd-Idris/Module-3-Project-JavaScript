/* Pseudo code for accessing To-Do-App page with two methods, 
 welcome message and logout functionality */
//---------------------------------------------------------

/*

-------- Access the Link process --------
1. Get all protected links that require the user to be logged in to T0-Do-App page.
  1.1 Application Link on the Navigation bar
  1.2 Learn More button on Homepage
2. Click on the link, A message will show up for accessing the application page
3. Re-direct the user to the Login page.

-------- Login Page process --------
4. Get the form inputs from the user (Email and Password).
5. Wait the user to click the "Login" button.
6. Read the values that the user entered in the form inputs.
7. Check if the data is valid - Phase #1 (inputs are not empty).
8. After checking Phase #1, then start checking Phase #2:
  8.1 Check the email if the entered email meets Regex pattern requirements.
  8.2 Check the password if the entered password meets Regex pattern requirements.
9. When the user clicks the "Login" button, get the values from the form inputs.
10. Compare these values with the data from a browser's LocalStorage.
11. Show a message that the login was successful.
12. Clear all the inputs.
13. Re-direct the user to the ToDo-Application page. 

-------- Showing/Logging out process --------
14. Show the welcome message to the user with the user's name 
15. Show log out link on the navigation bar 
16. Hide Sign up and Login links from the navigation bar
17. When the user is finished click on log out link
18. When clicked, remove the current user from the local Storage
19. Show a logout message to confirm ,
20. Once confirmed, Redirect the user to the Home page.

*/

// Declare Accessing links
const applicationLink = document.getElementById("application-link");
const btnLearnMore = document.getElementById("btn-learn-more");

// Declare Welcome message & Logout link
const logoutLink = document.getElementById("logout-link");
const welcomeMessage = document.getElementById("welcome-message");

// Declare Log in & Log out
const loginLink = document.getElementById("login-link");
const signUpLink = document.getElementById("sign-up-link");

try {
  // Check if logged in through the navigation bar
  if (applicationLink) {
    applicationLink.addEventListener("click", AccessLinkProtection);
  }
} catch (error) {
  console.error("❌ Application setup error: ", error.message);
}
try {
  // Check if logged in through the Learn More button
  if (btnLearnMore) {
    btnLearnMore.addEventListener("click", AccessLinkProtection);
  }
} catch (error) {
  console.error("❌ Application setup error: ", error.message);
}

// Declare a Function to create a protection for accessing links on HomePage
function AccessLinkProtection(event) {
  event.preventDefault();
  try {
    // Get the existing user data from local storage
    const savedUserData = localStorage.getItem("logged-in-User");

    if (savedUserData) {
      // Already Logged in, No message needed
      window.location.href = "./todo-page.html";
    } else {
      // Not Logged in, show this message
      const confirmMessage = confirm(
        "🔐 If you want to access this page, you have to log in first",
      );

      // if confirmed, re-direct the user to the Login page
      if (confirmMessage) {
        window.location.href = "./login.html";
      }
    }
  } catch (error) {
    console.error("❌ Application link error: ", error.message);
    alert("❌ Something went wrong, please try again");
  }
}

try {
  if (loginLink || logoutLink) {
    // Get the existing user data from local storage
    const savedUserData = localStorage.getItem("logged-in-User");

    if (savedUserData) {
      // after user logged in hide these links
      if (loginLink) loginLink.style.display = "none";
      if (signUpLink) signUpLink.style.display = "none";
      // Show this link
      if (logoutLink) logoutLink.style.display = "flex";
    } else {
      // Hide this link
      if (logoutLink) logoutLink.style.display = "none";
    }
  }
} catch (error) {
  console.error("❌ Error showing / hiding links: ", error.message);
}

try {
  // Log out link
  if (logoutLink) {
    logoutLink.addEventListener("click", function (event) {
      event.preventDefault();
      try {
        const confirmLogout = confirm("⚠️ Are you sure you want to log out?");

        // if confirmed, re-direct the user to the Home page
        if (confirmLogout) {
          // Remove the current user from localStorage
          localStorage.removeItem("logged-in-User");
          alert("✅ You have been logged out successfully.");
          window.location.href = "./index.html";
        }
      } catch (error) {
        console.error("❌ Logout error: ", error.message);
        alert("❌ Could not log out, please try again");
      }
    });
  }
} catch (error) {
  console.error("❌ Logout link setup error: ", error.message);
}

try {
  // Welcome Message
  if (welcomeMessage) {
    // Get the existing user data from local storage
    const savedUserData = localStorage.getItem("logged-in-User");
    if (savedUserData) {
      try {
        const user = JSON.parse(savedUserData);
        // Show the user a welcome message with the user's name
        welcomeMessage.textContent = `Welcome, ${user.name}`;
      } catch (error) {
        console.error("❌ Error reading user data: ", error.message);
        welcomeMessage.textContent = "Welcome, User!";
      }
    }
  }
} catch (error) {
  console.error("❌ Welcome message error: ", error.message);
}
