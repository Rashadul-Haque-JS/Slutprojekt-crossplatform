import axios from 'axios'

export const departureAPI = async() => {
    return await axios.get('/.netlify/functions/departure')
}

export const weatherAPI = async() => {
    return await axios.get('/.netlify/functions/weather')
}

