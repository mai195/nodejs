const request = require('request');
const geocode = require('./geocode')

// const forecast = (latitude, longitude, callback) => {
//     const url = 'http://api.weatherstack.com/forecast?access_key=40eec1592321516775e4af0ee88a74fa&query=' + latitude + ',' + longitude + '&units=m'

//     request({ url: url, json: true }, (error, response) => {   
//         if(error) {
//             callback('Unable to connect to weather service!', undefined)
//         }
//         else if(response.body.error) {
//             callback('Unable to find location', undefined)
//         }
//         else {
//             callback(undefined, response.body.current.weather_descriptions[0] + '. It is currently ' + response.body.current.temperature + ' degrees out. It feels like ' + response.body.current.feelslike + ' degrees out.  There is a ' + response.body.current.precip + '% chance of rain.')
//         }
//     })
// }

const forecast = (place_name, callback) => {
    geocode(place_name, (error, {latitude, longitude, location} = {}) => {
        if(error) {
            return callback(error, undefined)
        }
        else {
            // const latitude = data.latitude
            // const longitude = data.longitude
            // const location = data.location

            const url = 'http://api.weatherstack.com/forecast?access_key=40eec1592321516775e4af0ee88a74fa&query=' + latitude + ',' + longitude + '&units=m'

            request({ url: url, json: true }, (error, {body}) => {   
                if(error) {
                    callback('Unable to connect to weather service!', undefined)
                }
                else if(body.error) {
                    callback('Unable to find location', undefined)
                }
                else {
                    //const current = response.body.current
                    callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees out. It feels like ' + body.current.feelslike + ' degrees out.  There is a ' + body.current.precip + '% chance of rain.')
                }
            })
        }
    })
}

module.exports = forecast