console.log('first task')

setTimeout(() => {
    console.log('second task')
}, 0)

console.log('next task');

//even when the time in the timeout function is set to 0, it will wait until the last immediate log finishes to run.
//run `node 14-set-timeout` to see it for yourself