const http = require('http');
const routes = require('./Routes/routes');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
const transporter = require('./Services/EmailConfig');
const port = process.env.PORT || 3000 ;


dotenv.config();

const transport = transporter(nodemailer);
console.log(process.env['HOST']);
console.log(process.env['PAGE_HOST']);
console.log(process.env['SERVICE']);
console.log(process.env['EMAIL']);
console.log(process.env['PASS']);
const hostname = process.env['HOST'];

const app = http.createServer((req, res) => {

    res.setHeader( "Access-Control-Allow-Headers" , "content-type");
    res.setHeader( "Access-Control-Allow-Origin" , "*");
    res.setHeader("Access-Control-Request-Method", "*");
    res.setHeader( "Access-Control-Allow-Methods" ,"*");
    routes(req,res,transport);

});


app.listen(port, hostname, () => {
    console.log(`Listen Server : ${port} in ${hostname}`);
});


