const { readFileSync, writeFileSync } = require('fs');
console.log('start');

const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

console.log(first, second);

writeFileSync(
    './content/result-sync.txt', 
    `Here is the result: ${first}, ${second} `,
    {flag: 'a'}); //repeats the writefilesync command every time you run node

    console.log('done with this task');
    console.log('starting the next one');

//open result-sync.txt beside this module in your text editor and run 'node 10-fs-sync.js'