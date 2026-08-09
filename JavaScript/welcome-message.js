// // Pseudo code for welcome message and logout functionality
// //--------------------------------------
// /*
// 1. Get the current logged-in user from localStorage.
// 2. Get the welcome message element and logout link element from the DOM.
// 3. Get all protected links that require the user to be logged in.
// 4. Check if the current user exists:
//    4.1 - If yes, display the welcome message with the user's name and show the logout link.
//    4.2 - Enable all protected links by removing any disabled styles.
// 5. If the current user does not exist:
//    5.1 - Hide the welcome message and logout link.
//    5.2 - Disable all protected links and show an alert when clicked, prompting the user to log in first.
// 6. Add an event listener to the logout link:
//    6.1 - When clicked, remove the current user from localStorage, show a logout success alert,
//     and redirect to the login page.
// */
// // Get the current logged-in user from Local Storage
// const currentUser = localStorage.getItem("logged-in-User");
// // Parse the current user from Local Storage
// const parsedUser = currentUser ? JSON.parse(currentUser) : null;
// const welcomeMessage = document.getElementById("welcome-message");
// const loginLink = document.getElementById("login-link");
// const logoutLink = document.getElementById("logout-link");
// // const protectedLink = document.querySelectorAll(".protected-link");

// // Check if the user is logged in and update the UI accordingly
// if (parsedUser) {
//   // Get the user's name or default to "User"
//   const userName = parsedUser.name || "User";
//   // User is logged in, show the welcome message and logout link
//   if (welcomeMessage) {
//     welcomeMessage.textContent = `Welcome, ${userName}!`;
//     loginLink.style.display = "none";
//   }

//   if (logoutLink) logoutLink.style.display = "inline-block";

//   // Enable the protected links
//   // protectedLink.forEach((link) => {
//   //   // Enable the link and remove any disabled styles
//   //   link.style.pointerEvents = "auto";
//   //   link.style.opacity = "1";
//   // });
// }
// // else {
// //   // User is not logged in, hide the welcome message and logout link
// //   if (welcomeMessage) welcomeMessage.textContent = "";
// //   // Hide the logout link and disable the protected links
// //   if (logoutLink) logoutLink.style.display = "none";

// //   // Disable the protected links and show an alert when clicked
// //   protectedLink.forEach((link) => {
// //     link.style.pointerEvents = "none";
// //     link.style.opacity = "0.6";
// //     link.addEventListener("click", (event) => {
// //       event.preventDefault();
// //       alert("⚠️ Please log in first to access this page.");
// //     });
// //   });
// // }

// // Add an event listener to the logout link to log out the user
// if (logoutLink) {
//   logoutLink.addEventListener("click", function (event) {
//     event.preventDefault();
//     const confirmLogout = confirm("Are you sure you want to log out?");
//     if (!confirmLogout) {
//       return; // User canceled the logout action
//     }
//     localStorage.removeItem("logged-in-User"); // Remove the current user from localStorage
//     alert("You have been logged out successfully.");
//     window.location.href = "login.html";
//   });
// }

const applicationLink = document.getElementById("application-link");
const logoutLink = document.getElementById("logout-link");
const welcomeMessage = document.getElementById("welcome-message");

// Check if logged in
if (applicationLink) {
  applicationLink.addEventListener("click", function (event) {
    event.preventDefault();

    const savedUserData = localStorage.getItem("logged-in-User");

    if (savedUserData) {
      // Already logged in, No message needed
      window.location.href = "../Templates/todo-page.html";
    } else {
      const confirmMessage = confirm(
        "🔐 If you want to see this page, you have to log in first",
      );

      if (confirmMessage) {
        window.location.href = "../Templates/login.html";
      }
    }
  });
}

// Log out link
if (logoutLink) {
  logoutLink.addEventListener("click", function (event) {
    event.preventDefault();

    const confirmLogout = confirm("Are you sure you want to log out?");

    if (confirmLogout) {
      localStorage.removeItem("logged-in-User"); // Remove the current user from localStorage
      alert("You have been logged out successfully.");
      window.location.href = "index.html";
    }
  });
}

// Welcome Message
if (welcomeMessage) {
  const savedUserData = localStorage.getItem("logged-in-User");

  if (savedUserData) {
    const user = JSON.parse(savedUserData);
    welcomeMessage.textContent = `Welcome, ${user.name}`;
  } else {
    alert("🔐 Please log in first!");
    window.location.href = "../Templates/login.html";
  }
}
