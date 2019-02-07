# How to contribute

This is set up to use Webpack to compile files together, perform preprocessing such as code linting, and some postprocessing like automatically adding vendor prefixes to CSS properties. Development and edits are mode locally using Webpack development server; the built site is emitted to the docs/ folder so that it can be hosted on GitHub Pages.

##1. Install node and npm 
Go to https://www.npmjs.com/get-npm and install Node.js and npm

##2. Clone this repository

##3. Install the dependencies
Run `npm install` to install the dependencies for this project

# How to edit
Make edits locally running Webpack's dev server. 

Run `npm run start` to start the dev server. Changes you make to files will automatically be updated in the browser.

Each section's html is in separate files in the src/pages/ directory. Webpack compiles them together and creates the navigation links for each one.