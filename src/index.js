const http = require('http');
const routes = require('./Routes/routes');
const dotenv = require('dotenv');
const hostname = 'localhost';
const port = process.env.PORT || 3000 ;

dotenv.config();

const app = http.createServer((req, res) => {
    routes(req,res);
});


app.listen(port, hostname, () => {
    console.log(`Listen Server : ${port} in ${hostname}`);
});


