// creating arrow function and setting it equal to variable createPassword
// function takes in objects and then sets defaults for them 
// (defaults not necessary because we set them up in commands)
const os = require('os')


const alpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
const numbers = '0123456789'
const symbols = '!@#$%^&*_-+='

const createPassword = (length = 12, hasNumbers = true, hasSymbols = true) => {
    let chars = alpha
    hasNumbers ? (chars += numbers) : ''
    hasSymbols ? (chars += symbols) : ''
    return generatePassword(length, chars);
}

const generatePassword = (length, chars) => {
    let password = '';
    // generating random character and adding to password variable
    for (let i = 0; i < length; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    return password;
}

module.exports = createPassword;