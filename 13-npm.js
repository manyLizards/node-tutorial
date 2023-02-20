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