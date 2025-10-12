# Numerical Methods MCQ Game

This is a simple multiple-choice question (MCQ) game built with React to help students study and learn about Numerical Methods.

## Features

- A clean and modern user interface.
- Multiple-choice questions based on a typical Numerical Methods syllabus.
- Instant feedback on your answers.
- A final score at the end of the quiz.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/your_username/numerical-methods-mcq.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Run the app
    ```sh
    npm start
    ```

## Deployment to GitHub Pages

To deploy this application to GitHub Pages, follow these steps:

1. Install the `gh-pages` package as a dev-dependency:
   ```sh
   npm install gh-pages --save-dev
   ```
2. Add the following properties to your `package.json` file:
   - A `homepage` property with the URL of your GitHub Pages site (e.g., `https://your-username.github.io/numerical-methods-mcq`).
   - `predeploy` and `deploy` scripts in the `scripts` section:
     ```json
     "scripts": {
       // ... other scripts
       "predeploy": "npm run build",
       "deploy": "gh-pages -d build"
     }
     ```
3. Deploy the application by running:
   ```sh
   npm run deploy
   ```

This will build the application and push the contents of the `build` directory to a new `gh-pages` branch on your GitHub repository, which will then be hosted on GitHub Pages.