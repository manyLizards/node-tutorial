//CommonJS, every file is module (by default)
// Modules - encapsulated code (only share minimum)

//pull in variables from another module/file
const names = require('./4-names');// the `./` at the beginning refers to the path to the module/file
console.log(names);

//pull in one function from another module/file
const sayHi = require('./5-utils');

//pull in function by calling it within the module and requiring the module
require('./7-mind-grenade');

sayHi('susan')
sayHi(john)
sayHi(peter)