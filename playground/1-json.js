const fs = require('fs')

//const book = {
//    title: 'Bible',
//    author: 'Heaven'
//}

//const bookJSON = JSON.stringify(book)
//console.log(bookJSON)

//const parsedData = JSON.parse(bookJSON)
//console.log(parsedData.author)

//fs.writeFileSync('1-json.json', bookJSON)   

// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)
// console.log(data.title)

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const user = JSON.parse(dataJSON)

user.name = 'John'
user.age = 30

const userJSON = JSON.stringify(user)
fs.writeFileSync('1-json.json', userJSON)





