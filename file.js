const fs = require('fs')

new Promise((resolve, reject) => {
    fs.readFile('stuff.txt', (error, data) => {
        if (error) {
            reject(error)
        } else {
            resolve(data)
        }
    })
})
    .then(data => {
        console.log(data.toString())
    })
    .catch(error => {
        console.log(error)
    })

console.log('here')