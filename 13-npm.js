// NPM = Node Package Manager
//run any of these in the integrated terminal

// `npm` - global command, comes with node
// `npm --version` or `npn --v`

// local dependency - use it only in this particular project
// npm i <packageName> to install local package

// global dependency - use it in any project
// npm install -g <packageName>
// sudo install -g <packageName> (mac)

// package.json - manifest file (stores important info about project/package)
// manual approach (create package.json in the root, create properties, etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

// run npm init in your integrated terminal until you create a package.json
// delete that package.json and then run npm init -y
// with your text editor open on package.json, run `npm i lodash` in the integrated terminal to see what happens to your package.json when you install a package
// notice as well that it downloaded a new folder in your local repo called node_modules with another folder inside titled "lodash"
// now try `npm i bootstrap`. Notice how node_modules now includes bootstrap, jquery, and popper.js. However, your package.json only includes bootstrap and lodash under dependencies since those are the installed packages.

// if you are working with a github repository, create a file titled `.gitignore` outside of all folders in the root of the project. Inside your gitignore file, type `node_modules`, so that they don't get sent to your remote repository.

const _ = require('lodash')

const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)

// run 'npm i nodemon -D' or 'npm i nodemon --save-dev' to save nodemon as a devDependency rather than a simple dependency
//we set it up as a devdependency because we don't need it for production, just while we're developing. This is where we'll add things like testing packages.

//in package.json under "scripts" is where you'll store commands for other developers to see, such as "start" and "dev".
//For example, the syntax could look like
//"start": "node 13-npm" to use this specific file
//"dev": "nodemon 13-npm" to test this specific file
//then you could go to the terminal and type 'npm run dev' and it would act the same as 'npm run nodemon 13-npm'

//For the purposes of this assignment, check the scripts that are already in package.json to see what it is that you're running.
//go ahead and run `npm start` to see how nodemon runs in your terminal
//watch was happens as you change your code. Nodemon will check as you go, so you don't have to continuously run tests.
//To stop nodemon at any time, try ctl + c

//to uninstall any package, run `npm uninstall [packageName]`
