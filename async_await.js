const fs = require('fs')
const util = require('util')
const read = util.promisify(fs.readFile)

var run = async () => {
    read('data_1.txt').then(data => {
        console.log(data.toString())
    })
    const data = await read('data_2.txt')
    console.log(data.toString())
}



run()