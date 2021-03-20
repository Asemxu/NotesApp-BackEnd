const transporter =  (nodemailer) => { 
    return nodemailer.createTransport({
        service:process.env['SERVICE'],
        auth: {
            user: process.env['EMAIL'],
            pass: process.env['PASS']
        } 
    })
    
}



module.exports = transporter;
