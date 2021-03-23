const bcrypt = require('bcrypt');

const encryptar = async (string) =>{
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(string, salt);
    return hash;
}





module.exports = encryptar;