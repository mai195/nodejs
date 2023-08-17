const request = require('request');
//const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

// const url = 'http://api.weatherstack.com/forecast?access_key=40eec1592321516775e4af0ee88a74fa&query=37.8267,-122.4233&units=m'

// request({ url: url, json: true }, (error, response) => {   
//     if(error) {
//         console.log('Unable to connect to weather service!')
//     }
//     else if(response.body.error) {
//         console.log('Unable to find location')
//     }
//     else {
//         console.log(response.body.current.weather_descriptions[0] + '. It is currently ' + response.body.current.temperature + ' degrees out. It feels like ' + response.body.current.feelslike + ' degrees out.  There is a ' + response.body.current.precip + '% chance of rain.')
//     }
// })

// const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibWFpMTIzNDU2IiwiYSI6ImNsajRqcDJvcTAyaXYzcnBhZmcxd3RyanoifQ.Hg5bn7CTKG7cNv_lUe64Rw&limit=1'

// request({ url: geocodeURL, json: true}, (error, response) => {
//     if(error) {
//         console.log('Unable to connect to location services!')
//     }
//     else if(response.body.features.length === 0) {
//         console.log('Unable to find location. Try another search.')
//     }
//     else {
//         const latitude = response.body.features[0].center[1]
//         const longitude = response.body.features[0].center[0]
//         console.log(latitude, longitude)
//     }
// })

// geocode('Boston', (error, data) => {
//     console.log('Error', error)
//     console.log('Data', data)
// })

// forecast(-75.7088, 44.1545, (error, data) => {
//     console.log('Error', error)
//     console.log('Data', data)
// })


const place_name = process.argv[2]

if(!place_name) {
    console.log('Please provide an address')
}  
else {
    forecast(place_name, (error, data) => {
        console.log('Error', error)
        console.log('Data', data)
    })
}

