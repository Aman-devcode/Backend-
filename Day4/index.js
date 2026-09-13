const http = require('http');

const server = http.createServer((req, res) => {
    console.log("helloww aman bhai kaise ho");

    res.write("Server chal raha hai bhai ");
    res.end();   
});

server.listen(400, () => {
    console.log("I am listening carefully at port number 4000");
});