const { v4: uuidv4 } = require('uuid');


const getUUid = () => {
    const uid =  uuidv4();
    let newId = "";
    uid.split('-').forEach(elementId => {
        newId += elementId    
    }); 
    return newId;
}

module.exports = getUUid;