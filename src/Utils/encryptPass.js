const bcrypt = require('bcrypt');

const encryptarPass = async (password) =>{
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    return hash;
}


module.exports = encryptarPass;