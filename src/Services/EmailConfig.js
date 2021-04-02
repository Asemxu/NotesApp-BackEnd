const transporter =  (nodemailer) => { 
    return nodemailer.createTransport({
        service:process.env['SERVICE'],
        auth: {
            user: process.env['EMAIL'],
            pass: process.env['PASS']
        },
        tls: {
            // do not fail on invalid certs
            rejectUnauthorized: false
        },
    })
    
}



module.exports = transporter;
