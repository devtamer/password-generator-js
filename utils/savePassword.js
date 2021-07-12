const fs = require('fs')
const path = require('path')
const os = require('os')
const chalk = require('chalk')


function savePassword(password, arry) {
    fs.open(path.join(__dirname, '../', 'passwords.txt'), 'a', (e, id) => {
        if (arry) {
            fs.write(id, arry + os.EOL, null, 'utf-8', () => {
                fs.close(id, () => {
                    console.log(chalk.green('Passwords saved to passwords.txt'))
                })
            })

        } else {
            fs.write(id, password + os.EOL, null, 'utf-8', () => {
                fs.close(id, () => {
                    console.log(chalk.green('Password saved to passwords.txt'))
                })
            })

        }

    })
}

module.exports = savePassword;