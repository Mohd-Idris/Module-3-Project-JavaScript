# 📋 MyJSPro — Task Manager Application

A beginner-friendly, interactive web application for managing daily tasks with priority levels, automatic due date calculation, and user authentication. Built with **pure HTML, CSS, and vanilla JavaScript**.

# 🎯 Project Overview

The goal of this project is build a fully functional beginner-friendly task management web application using pure HTML, CSS, and Vanilla JavaScript - no frameworks.

## 🚀 Features

### 🔐 User Authentication

- **Sign Up** — Create a secure account with name, email, and password
- **Log In / Log Out** — Session-based access control
- **Local Storage** — Remembers your account and tasks in your browser
- **Protected Access** — Application page requires login first

### ✅ Task Management

- **Add New Tasks** — Enter task name + select priority
  - 🟥 **Critical** → Due in **1 day**
  - 🟧 **Major** → Due in **3 days**
  - 🟩 **Minor** → Due in **5 days**
  - 📅 **Custom** → Pick **any due date** you want!
- **Edit Existing Tasks** — Click the pencil icon → form scrolls into view → update → save
- **Mark as Completed** — Click the checkmark → moves to Completed section
- **Delete Tasks** — Click the X icon → confirmation prompt → removes task
- **Auto-Calculate Due Dates** — Automatically sets based on priority, or manual date picker for Custom
- **Visual Feedback** — Smooth scroll + pulse animation when editing

### 📬 Contact Form

- Validated inputs (name, email, subject, message)
- Sends directly to your email via **Formspree**
- Success confirmation message

### 🛡️ Security & Best Practices

- ✅ **No `innerHTML` for user content** — uses `createElement` + `textContent` (safe from injection)
- ✅ Try/catch error handling on ALL operations
- ✅ LocalStorage safely parsed with fallback
- ✅ Input validation on every field
- ✅ Safe element checks — won't crash if something missing

# 🧭 Navigation & Sections

The website features a smooth, multi-pages navigation layout including:

- Logo & 5-Link Navigation: Quick access to all pages.
- Application Page: Main application page.
- Contact Me: A dedicated area for reaching out.
- Sign Up Page: A page to create an account
- Login Page: A page to access the application page.
- Footer: Copyrights and social links.

# 🛠️ Technologies & Tools

### Core Stack

- HTML5 - Semantic structure.
- CSS3 - Custom styling and layout.
- JavaScript (ES6+) - No frameworks! Pure JS only
- Local Storage - Browser Data save

## 🎨 Design Resources

I utilized these professional tools to enhance the UI/UX:

- Google Font: For all textual contents in the website (Poppins Font).
- Font Awesome: For scalable vector icons.
- Color Hunt: For selecting the professional color palette.

## 📱 Responsive Design (Breakpoints)

The website is optimized for different screen sizes using the following CSS strategy:

- Tablet View: Optimized for screens with a max-width: 768px.
- Mobile View: Optimized for screens with a max-width: 528px.

## 🛠️ Technologies Used

- **HTML5** — Semantic markup structure
- **CSS3** — Custom properties, Flexbox, responsive design
- **Vanilla JavaScript (ES6+)** — No frameworks! Pure JS only
- **LocalStorage API** — Persistent data storage
- **Font Awesome** — Icons for UI
- **Formspree** — Contact form email delivery

## 📁 Project Structure

```text
MyJSPro/
├── Templates/                  # Templates Folder
│   ├── index.html              # Home page
│   ├── todo-page.html          # Task Manager — Main Application - login required
│   ├──contact-me.html          # Contact Form page
│   ├── signup.html             # Sign Up / Register page
│   └── login.html              # Login page
│
├── CSS/                        # CSS Folder
│   └── style.css               # All styling — shared across all pages
│
├── Images/                     # Images Folder contains website images
│
├── JavaScript/                 # JavaScript Folder
│   ├── script.js               # Todo App — add/edit/delete/complete tasks
│   ├── login.js                # Login form validation & auth
│   ├── signup.js               # Sign Up form validation & account creation
│   └── welcome-message.js      # Login state — show/hide links, welcome message
│
├── .gitignore                  # Specifies which files Git should NOT track/upload
│
└── README.md                   # Project documentation

```

# Accessiblity Notes

For Accessibilty, I've tested the accessibilty in terms of:

- Keyboard Access: ensured that all the ineractive elements are working fine.
- Visual Design and Imagery: Checked the (Alt Text) attribute to make sure the Screen Reader (VoiceOver) is working perfectly.
- Color Contrast: I confirmed the minimum contrast ratio is met for my website.
- Form Validation: I tested that the form inputs have linked with lables, and for error checking all form inputs that have required field to be validated.

# Tests

To ensure that my code meets the requirements of cleaning and has no any kind of errors and unused code, I ran some tests to my code to review and clean my code is clear , I used the following tools:

## For Reviewing and Cleaning:

- VS Code feature: to clear and format indentation to look good.
- Developer Tools: to ensure your code is 100% utalizied.
- Validator.w3.org website: to validate your code is clean for HTML file.
- Jigsaw.w3.org website: to validate your code is clean for CSS file.

## For Accessibilty Test :

- Axe Devtools: to ensure the code has no errors.

## General Notes / Developer Logs

/_ Text _/

# 🚫 .gitignore Contents

### Operating System Files

- .DS_Store
- .DS_Store
- .DS_Store?
- .\_\*
- .Spotlight-V100
- .Trashes
- ehthumbs.db
- Thumbs.db
- desktop.ini

### Editor / IDE Files

- .vscode/
- .idea/
- \*.swp
- \*.swo
- \*~

### Browser / Temp Files

- \*.log
- .cache/

## 📖 How to Run and Use

### ▶️ How to Run the Website

1. Open the project folder in your code editor
2. Navigate to: **`Templates/index.html`** (Home page — starting point)
3. Right-click → **Open in Browser**
4. The website loads — you can navigate Home, Contact, and Login freely

### 📝 User Journey — Step by Step

#### 🔹 Step 1 — Browse Public Pages

- When you first visit the website, you see the **Home page**
- You can click and navigate: **Home → Contact → Login** — all work freely, no login required
- All pages load smoothly with full navigation visible

#### 🔹 Step 2 — Try to Access the Application

- Click **Application** in the navigation bar
- ⚠️ **A message appears:** _"If you want to access this page, you have to log in first"_
- Click **OK** → you are automatically redirected to the **Login page**

#### 🔹 Step 3 — If You Already Have an Account (Log In)

- Fill in your **Email** and **Password**
- Click **Log In**
- ✅ Success! You are taken directly to the **Application (Todo) page**
- The header updates: your name appears, "Log Out" replaces "Login" link and "Sign up" link

#### 🔹 Step 4 — If You Are NEW (Create an Account)

- On the Login page, click the **"Create Account"** link
- You go to the **Sign Up page**
- Fill in ALL required fields:
  - **Full Name** — at least 2 characters
  - **Email Address** — valid email format
  - **Password** — min. 8 characters, 1 letter + 1 number
  - **Confirm Password** — must match exactly
- Click **Sign Up**
- ✅ Account created successfully!
- You are automatically redirected to the **Login page**

#### 🔹 Step 5 — Log In With Your New Account

- Enter the **same email and password** you just created
- Click **Log In**
- ✅ Credentials verified → you enter the **Application Page**!

#### 🔹 Step 6 — Inside the Application (Todo Page)

- **Add Tasks:** Type a name → choose priority → click Add Task
- **Edit Tasks:** Click the ✏️ icon → form scrolls up → update → Save
- **Complete Tasks:** Click the ✅ icon → moves to Completed section
- **Delete Tasks:** Click the ❌ icon → confirm → removed

#### 🔹 Step 7 — Stay Logged In

- Once logged in, you can navigate **Home → Application → Contact** freely
- Clicking **Application** again → **NO login prompt** — goes straight there!
- Your session stays active until you click **Log Out**

#### 🔹 Step 8 — Log Out

- Click **Log Out** in the header
- Confirm → logged out → returns to Home page
- Next time you click **Application** → login prompt appears again!

## 🔒 Security Implementation

- ✅ Application page protected — login required
- ✅ User text rendered safely — no `innerHTML` risk
- ✅ All form inputs validated
- ✅ Try/catch error handling everywhere
- ⚠️ **Student project** — data stored locally in your browser

# 🔍 How to View

- Copy the below link.
- Paste the link on the browser.
- Then you will be able to see the whole project on your browser.
- The link: https: --/_ A link _/ --

## GitHub Repo Link

- https://github.com/Mohd-Idris/-/_ A link _/-

## Live Website Link

- https:// --/_ A link _/ --

## these data is duplicated -- will be removed later

## 📖 How to Run and Use

### ▶️ How to Run the Website

1. Open the project folder in your code editor
2. Navigate to: **`Templates/login.html`**
3. Right-click → **Open in Browser** (Chrome, Firefox, Edge, or Safari)
4. The login page appears — this is the starting point!

### 📝 How to Use the Application

#### Step 1 — Create an Account

- On the Login page, click the **Sign Up** link
- Fill in your details:
  - **Full Name** — at least 2 characters (letters, spaces, apostrophes, hyphens allowed)
  - **Email Address** — must be in valid format (example@domain.com)
  - **Password** — minimum 8 characters, must include at least one letter and one number
  - **Confirm Password** — type the same password again
- Click **Sign Up** → success message appears → auto-redirects to Login page after 3 seconds

#### Step 2 — Log In

- Enter the **email** and **password** you used to sign up
- Click **Log In** → homepage loads with your name in the welcome message
- Navigation updates: Login link disappears, Log Out appears

#### Step 3 — Access the Task Application

- Click **Application** in the navigation bar
- If not logged in → confirmation message appears → redirects to Login
- If already logged in → Task Manager page loads immediately

#### Step 4 — Add a New Task

- Type your **Task Name** in the input field
- Select **Priority** from the dropdown:
  - **Critical** → Due date = **today + 1 day**
  - **Major** → Due date = **today + 3 days**
  - **Minor** → Due date = **today + 5 days**
  - **Custom** → Date picker appears → choose your own due date
- Click **Add Task** → task card appears in the correct column

#### Step 5 — Edit a Task

- Click the **✏️ (pencil) icon** on any task card
- Page **smooth scrolls** to the form — inputs fill automatically
- Change the task name or priority
  - If switching to **Custom** → date picker shows up → select new date
- Click **Update Task** → card refreshes with new info

#### Step 6 — Mark Task as Completed

- Click the **✅ (checkmark) icon** on any task card
- Card updates → shows **Completed Date** instead of icons
- Moves to the **Completed Tasks** section at the bottom

#### Step 7 — Delete a Task

- Click the **❌ (X) icon** on any task card
- Confirmation message appears → click **OK** to delete or **Cancel** to keep
- Task is permanently removed

#### Step 8 — Contact Me Page

- Click **Contact Me** in navigation
- Fill in: Name, Email, Subject, and Message
- Click **Send Message** → validates all inputs → sends directly to email

#### Step 9 — Log Out

- Click **Log Out** in the navigation bar
- Confirmation message appears → click **OK**
- Returns to Login page → welcome message hidden → Login link visible again
