const { CANTREGISTERUSER , CANTEMAIL } = require('../Helpers/errorsMessage');
const {  SEND_EMAIL_ACTIVATED , SEND_EMAIL_CHANGE } = require('../Helpers/statusMessage');
const emailOptions = require('./EmailOptions');
const sendEmail = async (transporter,user,type) =>{
    let status ={
        status : true
    }
    try{
        await transporter.sendMail(emailOptions(user,type));
        type === "Registro" ? status.message = SEND_EMAIL_ACTIVATED : status.message = SEND_EMAIL_CHANGE(user.correo);
    }catch(error){
        console.log(error);
        status.status = false;
        type === "Registro" ? status.message = {error,options:emailOptions(user,type)} : status.message = CANTEMAIL;
    }
    return status
}


module.exports = sendEmail