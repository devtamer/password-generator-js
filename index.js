#!/usr/bin/env node
// Author: DevTamer https://github.com/devtamer/password-generator-js.git
// variable to require commander (program object)
const { program } = require('commander')
const chalk = require('chalk')
const clipboardy = require('clipboardy')
const path = require('path')
const log = console.log
const createPassword = require('./utils/createPassword')
const savePassword = require('./utils/savePassword')
const clearPassword = require('./utils/clearPasswords')
const batchPasswords = require('./utils/batchPasswords')


// specifying version number for application
program.version('1.0.0').description("Password Generator")

program
    .option('-l, --length <number>', 'length of password', "12")
    .option('-s, --save', 'save password to output file passwords.txt')
    .option('-nn, --no-numbers', 'remove numbers from passowrd')
    .option('-ns, --no-symbols', 'remove symbols from passowrd')
    .option('-r, --reset', 'remove all the passwords from txt file')
    .option('-b, --batch <number>', 'the number of passwords generated at once')
    .parse()

const { length, save, numbers, symbols, reset, batch } = program.opts()

// Get generated password 
const generatedPassword = createPassword(length, numbers, symbols)

// file containing passwords
const outputFile = ""

// reset contents of file
if (reset) {
    clearPassword(outputFile);
    log(chalk.red("Your passwords.txt has been reset."))
} else {
    // save to file
    if (batch) {
        log(chalk.blue("Generated Passwords: \n"), chalk.bold((batchPasswords(batch))))
        savePassword(batchPasswords(batch))
    } else {
        if (save) {
            savePassword(generatedPassword)
        }
        clipboardy.writeSync(generatedPassword)
        log(chalk.blue("Generated Password:"), chalk.bold(generatedPassword))
        log(chalk.yellow("Copied to your clipboard."))
    }
    // copying to clipboard using clipboardy

}