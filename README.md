# Command Line Password Generator

Node.js command line app to generate random passwords

## Usage
enter directory

```
cd password-generator-js
```

Install dependencies

```
npm install
```

Run file

```
node index (options) || newpass (options)
```

To create a symlink to run "passgen" from anywhere

```
npm link

# Now you can run
passwordgenerator (options)

# To remove symlink
npm unlink
```

## Options

| Short | Long              | Description                     |
| ----- | ----------------- | ------------------------------- |
| -l    | --length <number> | length of password (default: 12) |
| -s    | --save            | save password to passwords.txt  |
| -nn   | --no-numbers      | remove numbers                  |
| -ns   | --no-symbols      | remove symbols                  |
| -p   | --reset           | remove all the passwords from the txt file                  |
| -b    | --batch <number>            | allows for generating unlimited passwords at once (will save to text file by default)         |

| -h    | --help            | display help for command        |
| -V    | --version         | Show the version                |
