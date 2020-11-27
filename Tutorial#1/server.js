// import Express - Web server framework
const express = require('express');
const app = express();

// define the port for the webserver to be running on
const server = app.listen(7000, () => {
    console.log(`Express running -> PORT ${server.address().port}`);
})


// define a route
app.get('/', (req, res) => {
    res.send('Hello World! Update Test');
});