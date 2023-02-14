const http = require('http');
const server = http.createServer( (req, res) => {
    if (req.url === '/' ) {
        res.end('Welcome to our home page')
    }
    else if(req.url === "/about") {
        res.end('Here is our short history')
    }
    else {res.end(`<h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">back home</a>`)
    }   
})

server.listen(1234, 'localhost')

//open in integrated terminal
//open a web browser and type "localhost:5000", "localhost:5000/about", and "localhost:5000/error" where the url goes individually
//if you make any changes to the server, save the file, restart node with ctl+c, and re-enter into the terminal before refreshing the page
