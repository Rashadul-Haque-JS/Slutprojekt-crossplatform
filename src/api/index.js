import axios from 'axios'

export const departureAPI = async() => {
    return await axios.get('/.netlify/functions/departureHandlar')
}

export const weatherAPI = async() => {
    return await axios.get('/.netlify/functions/weatherHandlar')
}

