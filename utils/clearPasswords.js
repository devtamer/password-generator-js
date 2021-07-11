// add ability to clear password from output.txt file
const fs = require('fs')
const path = require('path')
const os = require('os')
const chalk = require('chalk')


const clearPasswords = (file) => {
    fs.open(path.join(__dirname, '../', 'passwords.txt'), 'r+', function (err, fd) {
        if (err) {
            return console.error(err);
        } fs.truncate(path.join(__dirname, '../', 'passwords.txt'), 0, function () {

        })
    });
}


module.exports = clearPasswords;