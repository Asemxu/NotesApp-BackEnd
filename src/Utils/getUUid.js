const { v4: uuidv4 } = require('uuid');


const getUUid = () => {
    return uuidv4();
}

module.exports = getUUid;