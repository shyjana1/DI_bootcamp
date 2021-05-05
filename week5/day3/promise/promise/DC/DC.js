const makeAllCaps = (array) => {
    return new Promise((resolve, reject) => {
        let capsArray = array.map(word => {
            if (typeof word === 'string') {
                return word.toUpperCase();
            } else {
                reject('Error: not all items in the array are strings!')
            }
        })
        resolve(capsArray);
    })
}
const sortWords = (array) => {
    return new Promise((resolve, reject) => {
        if (array) {
            resolve(array.sort())
        } else {
            reject('somethig went wrong')
        }
    })
}
// sortWords(['cucumber', 'tomatos', 'avocado'])
// .then(sort=>{
//   console.log(sort);
// })
// .catch(err=>{
//   console.log(err);
// })
makeAllCaps(['cucumber', 'tomatos', 'avocado'])
    .then(data => {
        return sortWords(data)
    })
    .then(sort => {
        console.log(sort);
    })
    .catch(err => {
        console.log('error', err);
    })