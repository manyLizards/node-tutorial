console.log('first task');
console.time()
for (let i = 0; i < 10000000; i++) {
    const h3 = document.querySelector("h3")
    h3.textContent = "Hey, everyone is waiting on me."
}
console.timeEnd()

console.log('next task');

//to see this in real time, right click on index.html and select `open in default browser`
//right click the page that populates and select `inspect`
//click over to the console tab to see the javascript running