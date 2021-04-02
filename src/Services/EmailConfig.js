const transporter =  (nodemailer) => {
    return nodemailer.createTransport({
        service:process.env['SERVICE'],
        port:465,
        auth: {
            user: process.env['EMAIL'],
            pass: process.env['PASS']
        } 
    })
    
}



module.exports = transporter;
