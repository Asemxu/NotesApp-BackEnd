const transporter =  (nodemailer) => { 
    return nodemailer.createTransport({
        service:process.env['SERVICE'],
        host:'smtp.gmail.com',
        port: 587,
        secure:true,
        auth: {
            user: process.env['EMAIL'],
            pass: process.env['PASS']
        },
       
    })
    
}



module.exports = transporter;
