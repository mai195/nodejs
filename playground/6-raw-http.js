 const http = require('http')
 const url = 'http://api.weatherstack.com/forecast?access_key=40eec1592321516775e4af0ee88a74fa&query=40,-75&units=m'
 
 const request = http.request(url, (response) => {
    let data = ''
    
    response.on('data', (chunk) => {
        data = data + chunk.toString()
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })
})

request.on('error', (error) => {
    console.log('An error', error)
}) 

request.end()

