// const fetch = require('node-fetch')
const encryptarPass = require('../Utils/encryptPass');
const getUUid = require('../Utils/getUUid');
const usersDB = require('../Database/db.json');
const writeDataToFile = require('../Utils/writeDataToFile');

const createUserDB = async (user) =>{
    delete user.recontraseña;
    user.contraseña = await encryptarPass(user.contraseña);
    user.id = getUUid();
    usersDB.users.push(user);
    writeDataToFile(`${process.env['DATABASE_PATH']}`,usersDB);

}


module.exports = { createUserDB }