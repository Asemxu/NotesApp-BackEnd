const getTemplateEmailActivated = require("../Templates/ActivatedEmail");


const emailOptions = (userData) =>{
    return {
        from: 'App Notes 📔 <AppNotes@gmail.com>', // sender address
        to: userData.correo, // list of receivers
        subject: "Confirmación de Cuenta", // Subject line
        html: getTemplateEmailActivated(userData), // html body
    };
}



module.exports = emailOptions;