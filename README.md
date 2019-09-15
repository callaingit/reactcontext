# React Project skeleton

## Folder struture

(root)
  |
  +--+ public (to be served by a web server)
  |  |
  |  +--- lib (where stuff from src folder end up once transpiled or copied)
  |
  +--+ src (to contain source code as .js and .jsx)
  |  |
  |  +--- *.js (Pure JavaScript files)
  |  |
  |  +--- *.jsx (JavaScript XML for React)
  |
  +--- package.json (contains some run-script commands and a few basic dependencies)
  |
  +--- node_modules (dir to hold npm packages for node to use)
  |
  +--- .gitignore (ignore src/ and node_modules/ folders)

### Installation from repo

run __npm install__

Will install @babel/babel-core @babel/babel-cli @babel/preset-react express to start with.

### Run babel as a daemon in verbose mode to transpile .jsx files into .js files
npm run-script compile-jsx

### Run express application that will provide
npm start