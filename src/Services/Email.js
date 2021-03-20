const { CANTREGISTERUSER } = require('../Helpers/errorsMessage');
const {  SEND_EMAIL_ACTIVATED } = require('../Helpers/statusMessage');
const emailOptions = require('./EmailOptions');
const sendEmail = async (transporter,response,user) =>{
    
    try{
        await transporter.sendMail(emailOptions(user));
           
        response.message = SEND_EMAIL_ACTIVATED;
    }catch(error){
        response.status = false;
        response.message = CANTREGISTERUSER;
    }
    return response;
}


module.exports = sendEmail