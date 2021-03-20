const http = require('http');
const routes = require('./Routes/routes');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
const transporter = require('./Services/EmailConfig');
const port = process.env.PORT || 3000 ;


dotenv.config();

const transport = transporter(nodemailer);

const hostname = process.env['HOST'];

const app = http.createServer((req, res) => {
    res.setHeader( "Access-Control-Allow-Headers" , "Content-Type");
    res.setHeader( "Access-Control-Allow-Origin" , "*");
    res.setHeader( "Access-Control-Allow-Methods" , "*");
    routes(req,res,transport);

});


app.listen(port, hostname, () => {
    console.log(`Listen Server : ${port} in ${hostname}`);
});


