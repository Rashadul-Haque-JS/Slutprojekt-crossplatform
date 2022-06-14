import axiox from 'axios'

let weatherURL;
let departureURL;

fetch(".netlify/functions/weather")
.then(response => response.json())
.then(json => {
    weatherURL = json.api;
})

fetch(".netlify/functions/departure")
.then(response => response.json())
.then(json => {
    departureURL = json.api;
})


export const departureAPI = async() => {
    console.log(departureURL)
    return await axiox.get(`https://api.resrobot.se/v2.1/departureBoard?id=740004046&format=json&accessId=${departureURL}`)
}

export const weatherAPI = async() => {
    return await axiox.get(`https://api.openweathermap.org/data/2.5/weather?q=stockholm&appid=${weatherURL}&&units=metric`)
}

