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
- **Visual Feedback** — Smooth scroll + pulse animation when editing a certain task(s)

### 📬 Contact Form

- Validated inputs (name, email, subject, message)
- Sends directly to your email via **Formspree**
- Success confirmation message

### 🛡️ Security & Best Practices

- ✅ **No `innerHTML` for user content** — uses `createElement` + `textContent` (safe from injection)
- ✅ Try/catch error handling on ALL operations
- ✅ LocalStorage safely parsed with fallback (applied on Sign up, Login, and Log out)
- ✅ Input validation on every field
- ✅ Safe element checks — won't crash if something missing

# 🧭 Navigation & Sections

The website features a smooth, multi-pages navigation layout including:

- Logo & 5-Link Navigation: Quick access to all pages.
- Application Page: A page that runs the app for Adding/Editing/Deleting tasks.
- Contact Me: A dedicated area for reaching me out.
- Sign Up Page: A page to create an account for the user to be able to access the app page later.
- Login Page: A page to access the app page by using the account's been created on the early stage.
- Footer: Copyrights and social links.

# 🛠️ Technologies & Tools

## 🛠️ Technologies Used

### Core Stack

- **HTML5** — Semantic markup structure
- **CSS3** — Custom properties, Flexbox, responsive design
- **Vanilla JavaScript (ES6+)** — No frameworks! Pure JS only
- **LocalStorage** — Persistent data storage (Browser Data save)
- **Font Awesome** — Icons for UI
- **Formspree** — Contact form email delivery

## 🎨 Design Resources

I utilized these professional tools to enhance the UI/UX:

- Google Font: For all textual contents in the website (Poppins Font).
- Color Hunt: For selecting the professional color palette.
- Font Awesome: For scalable vector icons.
- Formspree: For submitting the form to my email.

## 📱 Responsive Design (Breakpoints)

The website is optimized for different screen sizes using the following CSS strategy:

- Tablet View: Optimized for screens with a max-width: 768px.
- Mobile View: Optimized for screens with a max-width: 528px.

## 📁 Project Structure

```text
MyJSPro/
├── index.html              # Home page
├── todo-page.html          # Task Manager App — Main Application - login required
├── contact-me.html         # Contact Form page
├── signup.html             # Sign Up / Register page
├── login.html              # Login page
│
├── style.css               # All styling — shared across all pages
│
├── Images/                 # Images Folder contains website images
│
├── script.js               # Todo App — add/edit/delete/complete tasks
├── login.js                # Login form validation & auth
├── signup.js               # Sign Up form validation & account creation
├── welcome-message.js      # Login state — show/hide links, welcome message
│
├── .gitignore              # Specifies which files Git should NOT track/upload
│
└── README.md               # Project documentation

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

- VS Code feature: to clear unused code (commented out)and format indentation to look good.
- Developer Tools: to ensure your code is 100% utalizied.
- Validator.w3.org website: to validate your code is clean for HTML file.
- Jigsaw.w3.org website: to validate your code is clean for CSS file.

## For Accessibilty Test :

- Axe DevTools: to ensure the code has no errors and meets Axe DevTools Standards.

## General Notes / Developer Logs

- The idea is build a **To-Do-App** allows the user to perform well by adding tasks to the user's agenda, and then can update it if necessary, complete it once it's done, or even delete it.

- It took time to draw the scenario, and then implemented it because JavaScript was a new concept to me; and at the beginning it was not easy to do a simple thing, but by time I got used to it.

### Dev Logs

1. Build the 5 pages, then style each page.

2. Make a JS file for **To-Do-App**, **Sign up**, **Login**, and **Welcome message**.

3. Minimize the code, build **Functions** to reduce my code and make it reusable if needed. After building my code, I used the **Functions** to make my code shorter, flixible and reusable again.

4. Replacing unsafe **innerHTML** with secure approach - I replaced all innerHTML blocks with this approach but it took time because I've used innerHTML all the time to build this project, then the **Tutor** asked us to replace any **innerHTML** block with a secure methode using safe element creation (createElement(), textContent(), and appendChild()) to secure your website from **Injection attack**.

5. Adding LocalStorage for each of **Sign up**, **Login**, and **Welcome message**.

6. Wrapped all code within **try/catch** blocks to ensure my code is protected from every possible scenario that might happend during using the website.

### Challenges:

- During building this project I've encountered some challenges:

1. **Runtime Errors** -
2. **Event handler Error** - I fixed this issue by adding checks and try/catch blocks.
3. **Reference Error** - I fixed this by making the JS files run after the HTML loads well.

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

- Clone or download the repository
- Open the file named `index.html` in the browser
- Go to `Application link` and click it
- Add Task(s) | Delete Tasks(s) | Update Task(s) | Complete Task(s)

### Or

- You can use the provided link below (Live link) to navigate the whole website

### Or

1. Open the project folder in your code editor
2. Navigate to: **`index.html`** (Home page — starting point)
3. Right-click → **Open in Browser**
4. The website loads — you can navigate freely
5. Follow the User Journey below

## 📝 User Journey — Step by Step

#### 🔹 Step 1 — Browse Public Pages

- When you first visit the website, you see the **Home page**
- You can click and navigate: **Home → Contact → Sign up → Login** — all work freely, no login required
- All pages load smoothly with full navigation visible

#### 🔹 Step 2 — Try to Access the Application

- Click **Application** in the navigation bar
- ⚠️ **A message appears:** _`"If you want to access this page, you have to log in first"`_
- Click **OK** → you are automatically redirected to the **Login page**

#### 🔹 Step 3 — If You Already Have an Account (Log In)

- Fill in your **Email** and **Password**
- Click **Log In**
- ✅ Success! You are taken directly to the **Application (Todo) page**
- The header updates: your name appears, "Log Out" replaces "Login" link and "Sign up" link

#### 🔹 Step 4 — If You Are NEW (Create an Account)

- On the Login page, click the **"Create Account"** link
- After clicking the link , You will be taken to the **Sign Up page**
- Fill in ALL required fields:
  - **Full Name** — at least 2 characters
  - **Email Address** — valid email format
  - **Password** — min. 8 characters, 1 letter + 1 number
  - **Confirm Password** — must match exactly the password
- Click **Sign Up**
- **A message appears:** ✅ Account created successfully!
- You are automatically redirected to the **Login page**

#### 🔹 Step 5 — Log In With Your New Account

- Enter the **same email and password** you just created
- Click **Log In**
- ✅ Credentials verified → you enter the **Application Page**!

#### 🔹 Step 6 — Inside the Application (Todo Page)

- **Add Tasks:** Type a name → choose priority → click Add Task `
- **Edit Tasks:** Click the `✏️ Update icon `→ form scrolls up → update the task → Save
- **Complete Tasks:** Click the `✅ Complete/Done icon` → moves to Completed section
- **Delete Tasks:** Click the `❌ Delete icon` → confirm → removed

#### Step 6.1 — Add a New Task

-- `Default Scenario`:

- Type your **Task Name** in the input field
- Select **Priority** from the dropdown:
  - **Critical** → Due date = **today + 1 day**
  - **Major** → Due date = **today + 3 days**
  - **Minor** → Due date = **today + 5 days**

  - **Custom** → Date picker appears → choose your own due date

- Click **Add Task** → task card appears in the correct column/card

-- `Scenario #2`: In this scaenario we set a default value for a priority if the user forget or does not want to set any kind of priorities, then will be automatically set to `Minor Priority`

- Type your **Task Name** in the input field
- Click **Add Task** → task card appears in the `Minor/Custom Tasks` column/card

#### Step 6.2 — Edit a Task

- Click the **✏️ Update icon** on any task card
- Page **smooth scrolls** to the form — inputs fill automatically
- `Add Task` button disappeared and `Edit Task` button shows up instead
- Change the task name or priority or due date if the task has it
  - If switching the task to **Custom** priority, then → date picker shows up → select new date
- Click **Edit Task** → card refreshes with new info

#### Step 6.3 — Mark Task as Completed

- Click the **✅ Complete/Done icon** on any task card
- Card updates → shows **Completed Date** the icons (Update, Delete, and Complete) will be disappeared
- Moves to the **Completed Tasks** column/card

#### Step 6.4 — Delete a Task

- Click the **❌ Delete icon** on any task card
- Confirmation message appears → click **OK** to delete or **Cancel** to keep it
- Clicked Ok → Task is permanently removed

#### 🔹 Step 7 — Stay Logged In

- Once logged in, you can navigate **Home → Application → Contact** freely
- Clicking **Application** again → **NO login prompt required** — goes straight there!
- Your session stays active until you click **Log Out**

#### 🔹 Step 8 — Log Out

- Click **Log Out** in the header
- **A message appears:** Confirmation message → logged out → returns to Home page → welcome message hidden → Sign up and Login links visible again
- Next time you click **Application** → login prompt appears again!

#### Step 9 — Contact Me Page

- Click **Contact Me** in navigation
- Fill in: Name, Email, Subject, and Message inputs
- Click **Send Message** → validates all inputs → sends directly to my email

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
- The link: (https://mohd-idris.github.io/Module-3-Project-JavaScript/)

## GitHub Repo Link

- [Click here to see my GitHub repository link](https://github.com/Mohd-Idris/Module-3-Project-JavaScript)

## Live Website Link

- [Click here to see my website live](https://mohd-idris.github.io/Module-3-Project-JavaScript/)
