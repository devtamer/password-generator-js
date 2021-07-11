#!/usr/bin/env node
// variable to require commander (program object)
const { program } = require('commander')
const chalk = require('chalk')
const clipboardy = require('clipboardy')
const log = console.log
const createPassword = require('./utils/createPassword')
const savePassword = require('./utils/savePassword')


// specifying version number for application
program.version('1.0.0').description("Password Generator")

program
    .option('-l, --length <number>', 'length of password', "12")
    .option('-s, --save', 'save password to output file passwords.txt')
    .option('-nn, --no-numbers', 'remove numbers from passowrd')
    .option('-ns, --no-symbols', 'remove symbols from passowrd')
    .parse()

const { length, save, numbers, symbols, capitals } = program.opts()

// Get generated password 
const generatedPassword = createPassword(length, numbers, symbols)

// save to file
if (save) {
    savePassword(generatedPassword)
}

// copying to clipboard using clipboardy
clipboardy.writeSync(generatedPassword)

// output the generated password 
log(chalk.blue("Generated Password:"), chalk.bold(generatedPassword))
log(chalk.yellow("Password copied to clipboard, use Control-V or Command-V to paste."))