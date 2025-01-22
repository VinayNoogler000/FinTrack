# FinTrack App: An Easy Way To Track Your Earnings And Expenses

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/VinayNoogler000/FinTrack/blob/main/LICENSE.txt)
[![GitHub issues](https://img.shields.io/github/issues/VinayNoogler000/QR-Code-Generator)](https://github.com/VinayNoogler000/FinTrack/issues)
[![GitHub stars](https://img.shields.io/github/stars/VinayNoogler000/QR-Code-Generator)](https://github.com/VinayNoogler000/FinTrack/stargazers)
[![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)](https://github.com/VinayNoogler000/FinTrack/blob/main/src/index.html)
[![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://github.com/VinayNoogler000/FinTrack/blob/main/src/style.css)
[![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)](https://github.com/VinayNoogler000/FinTrack/blob/main/src/app.js)
[![UUID](https://img.shields.io/badge/uuid-0078D4?style=for-the-badge&logo=uuid&logoColor=white)](https://www.npmjs.com/package/uuid)
[![SweetAlert](https://img.shields.io/badge/SweetAlert-FF5E5B?style=for-the-badge&logo=SweetAlert&logoColor=white)](https://sweetalert.js.org/)

## 📖 Overview

FinTrack is a user-friendly web application designed to help you manage your finances effortlessly. With FinTrack, you can:

- Add and categorize your earnings and expenses.
- View your current balance and transaction history.
- Easily manage and edit your financial transactions.

Whether you are looking to keep track of your daily expenses or manage your monthly budget, FinTrack provides a simple and effective solution.

## 🎥 Demo

![FinTrack App](https://github.com/VinayNoogler000/FinTrack/blob/main/assets/Demo.gif?raw=true)

## 🛠 Technologies Used

- **HTML5**: Provides the structure and content of the web page.
- **Tailwind CSS**: A utility-first CSS framework for styling the application.
- **JavaScript**: Adds interactivity and functionality to the web application.
- **UUID**: A library to generate unique identifiers for each transaction.
- **SweetAlert**: A library for creating beautiful and customizable alert boxes.

## 🚀 Features

- Add and categorize earnings and expenses.
- View current balance and transaction history.
- Edit and delete transactions.
- Stylish confirmation dialog boxes using SweetAlert.
- Save transactions locally using `localStorage`.
- Responsive design with Tailwind CSS.
- Unique identifiers for each transaction using UUID.

## 📅 Planned Features

1. Add a feature to ask the user whether they want to save the transactions locally in the browser or not, using `swal` library confirmation box when the user has added their first transaction.
2. Implement backend using Express.js and RESTful APIs.
3. Build a 'Search' transactions feature to filter transactions based on source, amount, or type of transactions.
4. Implement a feature to add the date of the transaction.
5. Add a feature where the present month will be the default month for adding transactions.
6. Build functionality to generate monthly income/P&L statements in PDF format, allowing the user to select the month.
7. Implement user authentication.
8. Add a feature to add and edit notes for each transaction.

## 📚 Learnings

Throughout the development of FinTrack, several key learnings and insights were gained:

1. **Submit Event's submitter property**: Leveraged the submitter property in the event handler to access the button that submitted the form, enhancing form handling capabilities.
2. **Skypack CDN**: Utilized Skypack CDN service for importing and using NPM packages, such as the SweetAlert library, directly into the browser as ES modules.
3. **SweetAlert Library**: Implemented SweetAlert for displaying stylish confirmation dialog boxes, particularly for user confirmation on transaction deletion.
4. **localStorage API**: Gained a deep understanding of the `localStorage` API, its key features, and methods for manipulating data within localStorage.
5. **DOM Events**: Differentiated between `window` object's `load` and `DOMContentLoaded` events, optimizing event handling.
6. **Troubleshooting ES6 Modules**: Addressed issues related to importing NPM packages as ES6 modules due to incorrect references, improving module management.
7. **Custom Scrollbar Styling**: Applied custom scrollbar styling in webkit-based browsers using the `-webkit-scrollbar` pseudo-element, setting the width to 0px for a cleaner UI.

These learnings contributed significantly to the robustness and user experience of the FinTrack application.

## 📝 Prerequisites

Before cloning and running this project locally, ensure you have the following installed:

- **Code Editor**: An editor like VSCode for making any modifications.
- **Git**: Version control system to clone the repository.
- **Node.js**: Required for running backend services and using npm packages.
- **Web Browser**: A modern web browser like Chrome, Firefox, or Edge.
- **Basic Understanding**: Knowledge of HTML, CSS, and JavaScript.

## 🤝 Contributing

To contribute to this project, follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-branch-name`.
3. Make your changes and commit them: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature-branch-name`.
5. Submit a pull request.

## ⚙️ Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/VinayNoogler000/FinTrack.git
   ```
2. Navigate to the project directory:
   ```bash
   cd FinTrack
   ```
3. Install dependencies:
    ```bash
    npm install
    ```
4. Open `index.html` in your preferred web browser.

## 📂 Project Structure

The project structure is organized as follows:

```
FinTrack/
├── assets/ # Contains images, icons, and other asset files.
├── dist/   # Contains distribution/build files for production.
├── src/    # Contains the main source files for the application.
│   ├── index.html # The main HTML file for the application.
│   ├── style.css  # The main CSS file for styling the application.
│   ├── app.js     # The main JavaScript file for the application logic.
├── .gitignore     # Specifies files and directories to be ignored by Git.
├── LICENSE.txt    # Contains the license information for the project.
├── README.md      # The readme file you are currently reading.
└── package.json   # Contains metadata about the project and its dependencies.
```

## 💬 Seeking Feedback & Improvements

I would love to hear your feedback on this project! If you have suggestions for performance improvements or ideas for new features, please feel free to open an issue on the [GitHub repository](https://github.com/VinayNoogler000/FinTrack/issues).

## 🐛 Found a Bug? Have a Feature Suggestion?

If you find a bug or have a feature suggestion, please open an issue [here](https://github.com/VinayNoogler000/FinTrack/issues) with a clear description and steps to reproduce. Your input means a lot to me, as it helps me grow and become a more powerful Software Developer Engineer.

## 🙏 Acknowledgments

I would like to thank the following resources and tools that made this project possible:

- [HTML5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5) for providing the structure and content of the web page.
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework used for styling the application.
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) for adding interactivity and functionality to the web application.
- [UUID](https://www.npmjs.com/package/uuid) for generating unique identifiers for each transaction.
- [SweetAlert](https://sweetalert.js.org/) for creating beautiful and customizable alert boxes.
- [Skypack CDN](https://www.skypack.dev/) for importing and using NPM packages directly into the browser as ES modules.
- [Git](https://git-scm.com/) for version control.
- [Node.js](https://nodejs.org/) for running backend services and using npm packages.
- [VSCode](https://code.visualstudio.com/) for being an excellent code editor.
- [DoSomeCoding YT Channel](https://www.youtube.com/watch?v=fKhjFGBt4lc), the most important one, as [He](https://github.com/anshuopinion) gave me and other beginners the idea of building this FinTrack web app, and also provided us with it's basic design. So, Thank you so much to, [Anshu bhaiya](https://www.linkedin.com/in/anshuopinion) again for giving me the idea and designs of multiple frontend project, to strengthen my fundamentals.

## 💼 Careers

I am currently open to the following roles: 

* 💻 Looking for Internships in Web Development Roles (Frontend/Backend/Full-Stack).
* 👨‍💻 Seeking Full-time Software Developer Engineer (SDE) Positions
* 📍 Specialization: Web Development (Frontend, and Full-Stack)

If you are interested in working with me or have any opportunities, please reach out to me via [LinkedIn](https://www.linkedin.com/in/vinay-tambey/), [Email](mailto:vinaytambey000@gmail.com), or other socials mentioned below.


## 🗓️ What My Daily Life Looks Like?
As of now (latest version of this README file), I'm building Projects using Web Devlopement technologies to strengthen my fundamentals, in both Frontend & Backend, thriving to become a Full-Stack Web Developer, while learning Backend Web Development. 

This project/website is my 8th self-made Frontend project (previous one was [QR-Code Generator](https://github.com/VinayNoogler000/QR-Code-Generator)), which was made to strengthen my Frontend Web Development Skills. Also, I've planned to make this a Full-Stack Web App.

In Frontend Web Development, as of now, two more projects are left "Password Generator" and "Mobile Navigation Menu" (means, total 10 projects) to master or specialize in JavaScript.

After, that I will be building atleast 3-5 major Projects using React.js framework with Redux.js library, while learning Backend Web Development.

At last, after Completing Frontend Development Projects, and Learning Backend Development, I'll be making atleast 3 Major Full-Stack Projects, using MERN tech-stack. 

## 📜 License

This project is licensed under the [MIT](https://github.com/VinayNoogler000/FinTrack/blob/main/LICENSE) License.

## 📞 Contact Developer & Owner

**Vinay Tambey**
- LinkedIn: [Vinay Tambey](https://www.linkedin.com/in/vinaytambey)
- Email: [Send Email to Vinay](mailto:vinaytambey000@gmail.com)
- Twitter/X: [@VinayNoogler000](https://x.com/VinayNoogler000)
- GitHub: [@VinayNoogler000](https://github.com/VinayNoogler000)

For any queries or suggestions, feel free to reach out through above mentioned links.   

## 📊 Project Status

This project is, currently, not in development by the Owner, but we're always looking to add new features and improvements!

## 💼 Support

Give a ⭐️ if this project helped you!

---

Made with ❤️ by [Vinay Tambey](https://github.com/VinayNoogler000)
