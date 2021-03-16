const http = require('http');
const routes = require('./Routes/routes');
const hostname = 'localhost';
const port = process.env.PORT || 3000 ;

const app = http.createServer((req, res) => {
    routes(req,res);
});


app.listen(port, hostname, () => {
    console.log(`Listen Server : ${port} in ${hostname}`);
});


