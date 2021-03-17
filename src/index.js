const http = require('http');
const routes = require('./Routes/routes');
const dotenv = require('dotenv');
const port = process.env.PORT || 3000 ;
dotenv.config();
const hostname = process.env['HOST'];

const app = http.createServer((req, res) => {
    res.setHeader( "Access-Control-Allow-Headers" , "Content-Type");
    res.setHeader( "Access-Control-Allow-Origin" , "*");
    res.setHeader( "Access-Control-Allow-Methods" , "*");
    routes(req,res);

});


app.listen(port, hostname, () => {
    console.log(`Listen Server : ${port} in ${hostname}`);
});


