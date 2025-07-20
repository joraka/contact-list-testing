[![Node.js 🟩](https://img.shields.io/badge/Node.js-green?logo=node.js&logoColor=white&style=for-the-badge)](https://nodejs.org/)
[![Cypress 🧪](https://img.shields.io/badge/Cypress-brightgreen?logo=cypress&logoColor=white&style=for-the-badge)](https://www.cypress.io/)
[![Jira 🗂️](https://img.shields.io/badge/Jira-blue?logo=jira&logoColor=white&style=for-the-badge)](https://www.atlassian.com/software/jira)

# Contact List App Cypress Testing
Automated end-to-end tests for the [Contact List App](https://thinking-tester-contact-list.herokuapp.com/) are implemented in this project using Node.js and Cypress. The codebase is structured using the Page Object Model (POM) for maintainability. Some tests use persistent session state to minimize run time.

### 🛠️ Prerequisites

- Node.js (v16 or higher recommended)
- npm

### 📦 Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/joraka/contact-list-testing.git
   ```
2. Go to project's directory:
   ```bash
   cd contact-list-testing
   ```
3. Install dependencies:
   ```bash
   npm ci
   ```

### 🚦 Running Tests

- To run tests in UI mode:
  ```bash
  npm run cy:open
  ```
- To run tests in headless mode:
  ```bash
  npm run cy:run
  ```

## 🏗️ Project Structure
```plaintext
📁 contact-list-testing/  
├── 📁 cypress/
│   ├── 📁 e2e/            # Test cases
│   ├── 📁 pages/          # Page Object Model (POM) classes
│   └── 📁 support/        # Custom commands, data generators
├── 📄 package.json        # Project dependencies and scripts
└── 📄 cypress.config.js   # Cypress configuration
```

## 📊 Test Reporting

- Cypress HTML reports are generated using Mochawesome.
- After running tests, view the report at: `cypress/reports/index.html`

## ⚙️ CI/CD Integration

- Automated tests run in CI (GitHub Actions).
- Test reports are saved as build artifacts.


## 🤝 How to Contribute

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Open a pull request


## 📚 Additional Documentation

- [testcases.md - Test Cases Documentation](./testcases.md)
- [workflow.md - Project Workflow Guide](./workflow.md)
- [test-case.png - Test Case Screenshot (Jira)](./jira-screenshots/test-case.png)
- [bug-report.png - Bug Report Screenshot (Jira)](./jira-screenshots/bug-report.png)

## 📝 License

> *Unlicensed*  
> This project is for educational and demonstration purposes only. 🎓
