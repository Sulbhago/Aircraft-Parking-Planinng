# Getting Started with AeroPark

## 🚀 Quick start

1. **Install dependencies/modules**

    ```shell
    npm install
    ```

2. **Start the project**

    ```shell
     npm start
    ```

If everything is correct your project will launch at http://localhost:3000/

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

 .
    ├── node_modules
    ├── public
    ├── src
    ├── .gitignore
    ├── package-lock.json
    ├── package.json
    └── README.md

1. **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

1. **`/public`**: This directory contains all of the static files to be served, required for the build

1. **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

1. **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

1. **`yarn.lock`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

1. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

1. **`README.md`**: A text file containing useful reference information about your project.

## ⚙️ Technical decisions

This list reflects all the technical decisions that have been made around certain topics.

-------------------------------------------------------------------------------------------------- |
Context                                                                 |
| Code formatter                     | Prettier                                                                                           |
| Linter                             | ESlint                                                                                             |
| Static Type Checking               | TypeScript                                                                                         |
| Localization                       | React 
| Routing                            | React Router                                                                                       |
| Bundler/build                      | Webpack                                                                                            |
| Compiler                           | Babel                                                                                              |
| CSS-in-JS                          |                components                                                                                  |
| Unit/Integration Testing           | React Testing
| Preferred Component Design Pattern | Functional Compound Components (https://kentcdodds.com/blog/compound-components-with-react-hooks/)
|UI                                  | Material UI (https://mui.com/material-ui/getting-started/overview/)            
npm                                                                                               |
| Task runner                        | npm

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
