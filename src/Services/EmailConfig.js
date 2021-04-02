const transporter =  (nodemailer) => {
    return nodemailer.createTransport({
        service:process.env['SERVICE'],
        port:587,
        host:"smtp.gmail.com",
        secure:true,
        auth: {
            user: process.env['EMAIL'],
            pass: process.env['PASS']
        } 
    })
    
}



module.exports = transporter;
