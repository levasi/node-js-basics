
const fs = require('fs')
const util = require('util')

// fs.readFile('stuff.txt', (err, data) => {
//     console.log(data.toString())
// })

let read = util.promisify(fs.readFile)

read('stuff.txt')
    .then(data => {
        console.log(data.toString())
    })

// const builtin = require('module').builtinModules

// console.log(builtin)