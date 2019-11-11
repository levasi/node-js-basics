
const promise =
    new Promise((resolve, reject) => {
        resolve('good')
        reject('bad')
    })
        .then(value => {
            console.log(value)
        })

        .catch(error => {
            console.log(error)
        })


