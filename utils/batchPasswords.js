const os = require('os')
const createPassword = require('./createPassword')

const batchPasswords = (batch) => {
    let arry = [];
    for (let i = 0; i < batch; i++) {
        arry.push((i + 1) + "  :  " + createPassword() + os.EOL)
    }
    return arry.join(" ");

}

module.exports = batchPasswords;